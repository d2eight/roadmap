import { CircleMinus } from 'lucide-react';

export default function DashboardNoGuideCard() {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-2">
                <CircleMinus color="grey" />
                <p className="text-muted-foreground">
                    There is no such a guide, yet
                </p>
            </div>
        </div>
    );
}
