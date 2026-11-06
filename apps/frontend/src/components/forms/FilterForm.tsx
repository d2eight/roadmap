'use client';

import { Controller, useForm } from 'react-hook-form';
import { filterSchema, filterSchemaType, OrderByOptions } from 'shared-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Field, FieldLabel, FieldLegend, FieldSet } from '../ui/field';
import { FilterProgressGroup } from '../custom-ui/FilterProgressGroup';
import { searchParamsDefaultValues } from 'shared-constants';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useParamsContext } from '../../context/ParamsContext';

export function FilterForm() {
    const { searchParams, parsedParams } = useParamsContext();
    const router = useRouter();
    const pathname = usePathname();

    const progressStatus = useMemo(() => {
        if (parsedParams.progressStatus.length === 4) {
            return [];
        }

        return parsedParams.progressStatus;
    }, [parsedParams.progressStatus]);

    const defaultValues: filterSchemaType = {
        orderBy: parsedParams.orderBy,
        progressStatus: progressStatus,
    };

    const form = useForm<filterSchemaType>({
        resolver: zodResolver(filterSchema),
        defaultValues: defaultValues,
    });

    const orderByOptions: OrderByOptions = [
        {
            value: 'createdAt',
            label: 'Created',
        },
        {
            value: 'updatedAt',
            label: 'Updated',
        },
    ];

    function onSubmit(data: filterSchemaType) {
        const newOrderBy = data.orderBy;
        const newProgressStatus = data.progressStatus.length
            ? data.progressStatus
            : searchParamsDefaultValues.progressStatus;

        if (
            parsedParams.orderBy === newOrderBy &&
            JSON.stringify(parsedParams.progressStatus) ===
                JSON.stringify(newProgressStatus)
        ) {
            return;
        }
        
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('orderBy', newOrderBy);
        newParams.set('progressStatus', newProgressStatus.join(','));
        newParams.set('page', searchParamsDefaultValues.page.toString());

        return router.replace(`${pathname}?${newParams}`, { scroll: false });
    }

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            id="filter-form"
            className="xl:max-w-[300px] flex flex-col gap-[20px]"
        >
            <FieldSet>
                <FieldLegend>Filter options:</FieldLegend>
                <Controller
                    control={form.control}
                    name="orderBy"
                    render={({ field, fieldState }) => (
                        <Field aria-invalid={fieldState.invalid}>
                            <FieldLabel>
                                Filter by create\update date:
                            </FieldLabel>
                            <Select
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectGroup>
                                        {orderByOptions.map((option, index) => (
                                            <SelectItem
                                                className="cursor-pointer"
                                                value={option.value}
                                                key={index}
                                            >
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </Field>
                    )}
                />
                <FilterProgressGroup form={form} />
            </FieldSet>
        </form>
    );
}
