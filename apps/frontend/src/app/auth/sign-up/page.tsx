import { SignUpForm } from '../../../components/forms/signUpForm';
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
