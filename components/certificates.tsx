'use client';

import { Certificate } from '@prisma/client';

interface CertificatesProps {
  data: Certificate[];
}

const Certificates = ({ data }: CertificatesProps) => {
  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      Certificates
    </div>
  );
};

export default Certificates;
