import Certificates from '@/components/certificates';
import SearchInput from '@/components/search-input';
import prismadb from '@/lib/prismadb';

const RootPage = async () => {
  const certificates = await prismadb.certificate.findMany();

  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Certificates data={certificates} />
    </div>
  );
};

export default RootPage;
