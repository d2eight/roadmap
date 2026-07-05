import { SignInForm } from '../../../components/forms/SignInForm';
import { FormProcessor } from '../../../components/wrappers/FormProcessor';

export default function SignInPage() {
  return (
    <>
      <FormProcessor>
        <SignInForm />
      </FormProcessor>
    </>
  );
}
