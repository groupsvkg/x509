'use client';

import { Certificate } from '@prisma/client';

interface CertificatesProps {
  data: Certificate[];
}

const Certificates = ({ data }: CertificatesProps) => {
  return (
    <div className="w-full h-full overflow-x-auto space-x-2 flex justify-center items-center p-1">
      Certificate list is empty! ({' '}
      <span className="text-yellow-900">Implementation in progress )</span>
    </div>
  );
};

export default Certificates;
