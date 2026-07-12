import { redirect } from 'next/navigation';
import { auth } from 'auth';
import { headers } from 'next/headers';
import { Session, User } from 'better-auth';
import { PromptForm } from '../../components/forms/promptForm';
import { FormProcessor } from '../../components/wrappers/FormProcessor';

export default async function PromptingPage() {
  return (
    <>
      <FormProcessor>
        <PromptForm />
      </FormProcessor>
    </>
  );
}
