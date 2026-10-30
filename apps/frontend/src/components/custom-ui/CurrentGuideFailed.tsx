import { CircleMinus } from 'lucide-react';

export function CurrentGuideFailed() {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-2">
                <CircleMinus color="red" />
                <p className="text-muted-foreground">Something went wrong</p>
            </div>
        </div>
    );
}
