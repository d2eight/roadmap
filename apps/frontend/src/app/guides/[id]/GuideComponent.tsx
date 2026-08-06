'use client'

import { useContext } from 'react';
import { GuideContext } from '../../../context/GuideContext';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { GuideForm } from '@/components/forms/GuideForm';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function GuideComponent() {
  const { guide } = useContext(GuideContext);
  return (
    <section>
      <Card className="flex flex-row justify-between items-center pl-[50px] pr-[20px] mb-[20px] sticky top-[50px] z-50">
        <h1 className="ml-[50px]">{guide.title}</h1>
        <Button form="guide-form" type="submit" variant="success" className="w-[200px]">
          Save
        </Button>
      </Card>
      <div>
        <FormProcessor>
          <GuideForm />
        </FormProcessor>
      </div>
    </section>
  );
}
