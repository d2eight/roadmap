import { useEffect, useState } from 'react';
import { widthMap } from '@/constants/constants';
import { ScrollInfo, WidthInfo, WidthLabel } from 'shared-types';

export function useWindowScroll(): ScrollInfo {
  const [scrollY, setScrollY] = useState(
    typeof window !== 'undefined' && window.scrollY ? window.scrollY : 0,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const onTop = scrollY <= 200;

  return {
    scrollY,
    onTop,
  };
}
