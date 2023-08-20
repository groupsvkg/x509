# X509

## Example Certificate

```pem
-----BEGIN CERTIFICATE-----
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
-----END CERTIFICATE-----
```

Certificate Chain

```json
[
  {
    "type": "intermediate",
    "cert": {
      "serialNumber": "399F65E41F1C0944B601BBBA483951EC09262902",
      "subject": "jurisdictionC=RO\nbusinessCategory=Private Organization\norganizationIdentifier=PSDRO-NBR-41251980\nC=RO\nO=Smart Fintech Srl\nST=Bucharest\nL=Bucharest\nserialNumber=J40/7728/2019\nCN=smartfintech.eu",
      "issuer": "C=IT\nO=InfoCert S.p.A.\nOU=WSA Trust Service Provider\nCN=InfoCert Organization Validation SHA256 - CA 3",
      "subjectAltName": "DNS:smartfintech.eu, DNS:smartpay.smartfintech.eu, DNS:accounts.smartfintech.eu",
      "authorityInformationAccess": {
        "OCSP": "http://ocsp.ovca.ca3.infocert.it",
        "CA Issuers": "http://cert.infocert.it/ca3/ovca/CA.crt"
      },
      "validFrom": "Dec  7 17:24:12 2021 GMT",
      "validTo": "Dec  7 00:00:00 2023 GMT",
      "fingerprint": "76:AA:E1:09:4E:87:27:AC:25:63:FE:E1:DD:1A:E7:4C:BB:75:78:61",
      "fingerprint256": "5F:1C:84:71:DC:98:1D:93:67:BA:EE:09:D8:AB:2F:B0:46:11:1A:79:E0:15:21:85:90:53:C3:BD:13:85:E0:B2",
      "fingerprint512": "C3:8D:FE:07:2F:C4:F1:72:4F:47:DB:D3:BC:E2:D9:6E:85:26:17:4E:ED:12:8A:C2:E1:9F:08:9F:89:E7:6B:94:09:3D:F0:EF:4E:31:5F:2F:52:E5:5E:4E:D0:93:6B:7F:BC:20:44:CD:85:DF:D7:9E:C6:E6:75:54:A6:1B:62:E9",
      "keyUsage": ["Server authentication", "Client authentication"]
    }
  },
  {
    "type": "intermediate",
    "cert": {
      "serialNumber": "7D04F008647C18B07EE55A1F5A45874C7B45855B",
      "subject": "C=IT\nO=InfoCert S.p.A.\nOU=WSA Trust Service Provider\nCN=InfoCert Organization Validation SHA256 - CA 3",
      "issuer": "C=IT\nO=InfoCert S.p.A.\nOU=WSA Trust Service Provider\nserialNumber=07945211006\nCN=InfoCert Root CA 3",
      "authorityInformationAccess": {
        "OCSP": "http://ocsp.root.ca3.infocert.it",
        "CA Issuers": "http://cert.infocert.it/ca3/root/CA.crt"
      },
      "validFrom": "Nov 17 14:36:24 2017 GMT",
      "validTo": "Nov 17 15:36:24 2029 GMT",
      "fingerprint": "35:8F:4F:77:29:65:BB:82:C7:12:CE:F0:D0:A9:C2:A3:22:5D:B0:4E",
      "fingerprint256": "90:F7:0D:B8:9E:1F:30:0A:A1:62:AD:35:1E:44:D5:D1:9A:64:BE:44:1D:59:FD:8C:57:FC:7A:F7:1B:D5:35:2A",
      "fingerprint512": "F8:BE:0D:C7:82:33:FC:3C:5C:B7:B4:78:4E:A1:F6:BE:D2:D0:4B:29:C8:7D:0C:38:A4:60:5C:F6:CE:C1:10:78:98:9D:71:8D:F7:D2:FC:21:B6:5F:08:84:B2:86:E4:15:5A:D9:2C:D7:40:4F:4D:0D:00:FC:40:76:20:9C:A5:03"
    }
  },
  {
    "type": "root",
    "cert": {
      "serialNumber": "7C35DE37E34E4917F4A8D9F7C92BCAA4F9EE6AFA",
      "subject": "C=IT\nO=InfoCert S.p.A.\nOU=WSA Trust Service Provider\nserialNumber=07945211006\nCN=InfoCert Root CA 3",
      "issuer": "C=IT\nO=InfoCert S.p.A.\nOU=WSA Trust Service Provider\nserialNumber=07945211006\nCN=InfoCert Root CA 3",
      "authorityInformationAccess": [],
      "validFrom": "Dec 12 16:55:49 2016 GMT",
      "validTo": "Dec 12 17:55:49 2032 GMT",
      "fingerprint": "27:7A:16:8B:14:22:D7:9F:E0:8D:A7:23:F6:7A:D3:BA:1F:A0:FB:85",
      "fingerprint256": "2B:07:B0:51:AD:AB:81:89:48:98:9E:E0:B8:95:67:91:31:7C:CA:F9:18:4E:69:73:D1:F1:4A:16:D7:73:11:F7",
      "fingerprint512": "96:22:89:B5:81:AB:3A:36:DE:40:96:BC:DA:04:E1:C1:B5:C6:5D:97:7C:A1:4A:4B:D5:C1:0D:D8:61:0F:45:7D:F1:7C:ED:7A:9D:3C:40:2E:75:A8:71:ED:06:CF:BC:94:F2:91:FA:BF:C9:AE:33:01:F9:5D:D0:60:66:CB:50:66"
    }
  }
]
```

## Screenshot

Screenshot-2
![Screenshot - 2](docs/images/screenshot-2.png)

Screenshot-1
![Screenshot - 1](docs/images/screenshot-1.png)
