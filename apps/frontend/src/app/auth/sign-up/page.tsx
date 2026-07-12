import { SignUpForm } from '../../../components/forms/SignUpForm';
import { FormProcessor } from '../../../components/wrappers/FormProcessor';

export default function SignUpPage() {
  return (
    <>
      <FormProcessor>
        <SignUpForm />
      </FormProcessor>
    </>
  );
}
