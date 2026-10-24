import { SignInForm } from '../../../components/forms/SignInForm';
import { FormProcessor } from '../../../context/FormProcessor';

export default function SignInPage() {
    return (
        <>
            <FormProcessor>
                <SignInForm />
            </FormProcessor>
        </>
    );
}
