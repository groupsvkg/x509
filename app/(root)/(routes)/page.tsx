import Certificates from '@/components/certificates';
import SearchInput from '@/components/search-input';

const RootPage = async () => {
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Certificates />
    </div>
  );
};

export default RootPage;
