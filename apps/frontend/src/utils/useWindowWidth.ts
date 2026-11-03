import { useEffect, useMemo, useState } from 'react';
import { widthMap } from '../constants/constants';
import { WidthInfo } from 'shared-types';

export function useWindowWidth(): WidthInfo {
    const [width, setWidth] = useState(() =>
        typeof window !== 'undefined' && window.innerWidth
            ? window.innerWidth
            : 0,
    );

    const sortedWidthMap = useMemo(
        () => [...widthMap].sort((a, b) => b.size - a.size),
        [],
    );

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const currentWidthLabel = sortedWidthMap.find(
        (item) => width >= item.size,
    )?.label;
    const label = currentWidthLabel ?? 'sm';
    const isDesktop = label === '2xl' || label === 'xl';

    return {
        label,
        isDesktop,
    };
}
