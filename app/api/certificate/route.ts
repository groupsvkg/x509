import { NextResponse } from 'next/server';

import { getCertificateChain, parseCertificate } from '@/lib/x509';

export async function POST(req: Request) {
  const body = await req.json();

  const certificateChain = await getCertificateChain(body.cert);

  return NextResponse.json(certificateChain);
}
