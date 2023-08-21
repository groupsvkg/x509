'use client';

import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { ChangeEventHandler, useState } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';

const CertificateIdPage = () => {
  const [textInput, setTextInput] = useState<string>('');
  const [parsedCert, setParsedCert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const text: string = e.target.value;
    if (text === '') setParsedCert(null);

    setTextInput(text);
  };

  const onClick = async () => {
    if (!textInput) return;

    setIsLoading(true);
    try {
      const response = await axios.post('/api/certificate', {
        cert: textInput,
      });

      setParsedCert(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(`CERTIFICATE_POST Error`);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4 p-4">
      <Textarea
        onChange={onChange}
        rows={15}
        placeholder={`
        Enter PEM certificate with headers

        -----BEGIN CERTIFICATE-----
            <CERTIFICATE CONTENT>
        -----END CERTIFICATE-----
        `}
        spellCheck={false}
        value={textInput}
        className="bg-primary/25 text-xs text-cyan-500"
      />
      <Button
        onClick={onClick}
        className="w-64 text-primary hover:bg-primary/25 bg-primary/10"
      >
        Find Certificate Chain
      </Button>
      {isLoading && <Loader2 className="h-8 w-8 text-red-800 animate-spin" />}
      {parsedCert && (
        <div className={cn('w-full')}>
          <Separator className="bg-primary/10" />
          <JsonView src={parsedCert} />
        </div>
      )}
    </div>
  );
};

export default CertificateIdPage;
