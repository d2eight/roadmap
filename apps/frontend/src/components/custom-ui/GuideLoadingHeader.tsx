import { CardContent, CardFooter } from '../ui/card';
import { useGuideContext } from '../../context/GuideContext';

export function GuideLoadingHeader() {
    const { guide, status } = useGuideContext();

    function truncateText({
        string,
        length,
    }: {
        string: string;
        length: number;
    }) {
        if (string.length <= length) return string + '...';
        return string.slice(0, length) + '...';
    }

    const creatingSubject =
        status === 'QUESTIONS_GENERATION' ? 'questions' : 'guide';

    return (
        <>
            <CardContent className="flex flex-row justify-between items-center ">
                <h1>
                    Creating {creatingSubject} based on this prompt:{' '}
                    {truncateText({ string: guide.prompt, length: 10 })}
                </h1>
            </CardContent>
            <CardFooter className="flex flex-row items-center gap-[10px]">
                <div className="flex items-center gap-2">
                    <p className="shimmer text-sm text-muted-foreground">
                        Please wait&hellip;
                    </p>
                </div>
            </CardFooter>
        </>
    );
}
