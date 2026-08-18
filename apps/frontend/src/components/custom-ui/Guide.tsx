'use client'

import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { GuideForm } from '@/components/forms/GuideForm';

export default function Guide() {
  return (
    <FormProcessor>
      <GuideForm />
    </FormProcessor>
  );
}
