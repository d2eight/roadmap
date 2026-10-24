import { SignUpForm } from '../../../components/forms/SignUpForm';
import { FormProcessor } from '../../../context/FormProcessor';

export default function SignUpPage() {
    return (
        <>
            <FormProcessor>
                <SignUpForm />
            </FormProcessor>
        </>
    );
}
