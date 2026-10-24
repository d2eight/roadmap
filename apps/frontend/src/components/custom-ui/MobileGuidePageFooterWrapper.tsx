import { ReactNode } from 'react';

export function MobileGuidePageFooterWrapper({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="fixed bottom-[calc(16px+env(safe-area-inset-bottom))] left-5 right-5 block xl:hidden">
            {children}
        </div>
    );
}
