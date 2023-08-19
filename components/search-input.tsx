import { Search } from 'lucide-react';
import qs from 'query-string';

import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/use-debounce';

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const certificateId = searchParams.get('certificateId');
  const name = searchParams.get('name');

  const [value, setValue] = useState(name || '');
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: certificateId,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router, certificateId]);

  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        onChange={onChange}
        value={value}
        placeholder="Search..."
        className="pl-10 bg-primary/10"
      />
    </div>
  );
};

export default SearchInput;