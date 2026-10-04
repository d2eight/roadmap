import { PromptForm } from '../../components/forms/PromptForm';
import { FormProcessor } from '../../components/wrappers/FormProcessor';

export default async function PromptingPage() {
  return (
    <FormProcessor>
      <PromptForm pushToGuideStatus={true} />
    </FormProcessor>
  );
}
