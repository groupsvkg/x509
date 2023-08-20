'use client';

import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { ChangeEventHandler, useState } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const CertificateIdPage = () => {
  const [textInput, setTextInput] = useState<string>('');
  const [parsedCert, setParsedCert] = useState(null);

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const text: string = e.target.value;
    if (text === '') setParsedCert(null);

    setTextInput(text);
  };

  const onClick = async () => {
    try {
      const response = await axios.post('/api/certificate', {
        cert: textInput,
      });

      setParsedCert(response.data);
    } catch (error) {
      console.log(`CERTIFICATE_POST Error`);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-y-4 p-4">
      <Textarea
        onChange={onChange}
        rows={15}
        placeholder="Enter PEM certificate with headers."
        value={textInput}
        className="bg-primary/25 text-xs text-blue-400"
      />
      <Button
        onClick={onClick}
        className="w-64 text-primary hover:bg-primary/25 bg-primary/10"
      >
        Find Certificate Chain
      </Button>
      <div className={cn('w-full')}>
        {parsedCert && <Separator className="bg-primary/10" />}
        {parsedCert && <JsonView src={parsedCert} />}
      </div>
    </div>
  );
};

export default CertificateIdPage;
