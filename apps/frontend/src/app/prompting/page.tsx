import { PromptForm } from '../../components/forms/PromptForm';
import { FormProcessor } from '../../context/FormProcessor';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { CreateGuidePromptFormButton } from '../../components/custom-ui/CreateGuidePromptFormButton';
import { toggleExplanationString } from '../../constants/constants';

export default async function PromptingPage() {
    return (
        <FormProcessor>
            <Card className="max-h-screen overflow-y-auto h-full rounded-none xl:rounded-4xl">
                <CardHeader>
                    <CardTitle>Guide creation</CardTitle>
                    <CardDescription>Fill the inputs below:</CardDescription>
                </CardHeader>
                <CardContent className="h-full">
                    <PromptForm pushToGuideStatus={true} />
                </CardContent>
                <CardFooter>
                    <div className="flex flex-col gap-5 w-full">
                        <p>{toggleExplanationString}</p>
                        <CreateGuidePromptFormButton />
                    </div>
                </CardFooter>
            </Card>
        </FormProcessor>
    );
}
