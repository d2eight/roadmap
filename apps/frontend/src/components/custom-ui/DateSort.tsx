'use client';

import * as React from 'react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';

import { cn } from '../../lib/utils';
import { LucideChevronDown, LucideChevronUp } from 'lucide-react';
import { JSX } from 'react';

function DateSort({
    className,
    ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
    const icon: JSX.Element = props.checked ? (
        <LucideChevronDown />
    ) : (
        <LucideChevronUp />
    );

    return (
        <CheckboxPrimitive.Root className={cn('', className)} {...props}>
            {icon}
        </CheckboxPrimitive.Root>
    );
}

export { DateSort };
