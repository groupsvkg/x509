import { X509Certificate } from 'crypto';

const KEY_USAGE_OID_MAPPING: Record<string, string> = {
  '1.3.6.1.5.5.7.3.1': 'Server authentication',
  '1.3.6.1.5.5.7.3.2': 'Client authentication',
  '1.3.6.1.5.5.7.3.3': 'Code signing',
  '1.3.6.1.5.5.7.3.4': 'Email',
  '1.3.6.1.5.5.7.3.8': 'Timestamping',
  '1.3.6.1.5.5.7.3.9': 'OCSP Signing',
};

export function getKeyUsage(keyUsage: string[]) {
  return keyUsage?.map((oid) => KEY_USAGE_OID_MAPPING[oid]);
}

export function getAuthorityInformationAccess(infoAccess: string | undefined) {
  if (!infoAccess) return {};

  const transformedData = infoAccess.split('\n').map((line) => {
    const fields = line.split(' - URI:');
    return fields;
  });

  return Object.fromEntries(transformedData);
}

export function parseCertificate(certificate: string | Buffer) {
  const cert = new X509Certificate(certificate);

  return {
    serialNumber: cert.serialNumber,
    subject: cert.subject,
    issuer: cert.issuer,
    subjectAltName: cert.subjectAltName,
    authorityInformationAccess: getAuthorityInformationAccess(cert.infoAccess),
    validFrom: cert.validFrom,
    validTo: cert.validTo,
    fingerprint: cert.fingerprint,
    fingerprint256: cert.fingerprint256,
    fingerprint512: cert.fingerprint512,
    keyUsage: getKeyUsage(cert.keyUsage),
  };
}

export async function getIssuerCertificate(caIssuersUri: string) {
  const cert = await fetch(caIssuersUri);

  const der = await cert.arrayBuffer();

  return Buffer.from(der);
}

export async function getCertificateChain(
  certificate: string | Buffer
): Promise<any[]> {
  const cert = parseCertificate(certificate);

  if (cert.subject === cert.issuer) return [{ type: 'root', cert }];

  if (
    cert.authorityInformationAccess.length === 0 ||
    cert.authorityInformationAccess['CA Issuers'] === undefined
  )
    return [{ type: 'intermediate', cert }];

  const caIssuersCertificate = await getIssuerCertificate(
    cert.authorityInformationAccess['CA Issuers']
  );

  return [
    { type: 'intermediate', cert },
    ...(await getCertificateChain(caIssuersCertificate)),
  ];
}
