import { PromptForm } from '../../components/forms/promptForm';
import { FormProcessor } from '../../components/wrappers/FormProcessor';

export default async function PromptingPage() {
  return (
    <FormProcessor>
      <PromptForm pushToGuideStatus={true} />
    </FormProcessor>
  );
}
