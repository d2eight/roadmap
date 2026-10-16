'use client';

import { Controller, useForm } from 'react-hook-form';
import {
  filterSchema,
  filterSchemaType,
  OrderByOptions,
  paramsSchema,
} from 'shared-types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import { FilterProgressGroup } from '@/components/custom-ui/FilterProgressGroup';
import { searchParamsDefaultValues } from 'shared-constants';
import { usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import { ParamsContext } from '@/context/ParamsContext';

export function FilterForm() {
  const { setProcessingStatus } = useContext(FormProcessingContext);
  const { searchParams, parsedParams } = useContext(ParamsContext);
  const router = useRouter();
  const pathname = usePathname();

  const defaultValues: filterSchemaType = {
    orderBy: parsedParams.orderBy,
    progressStatus: parsedParams.progressStatus,
  };

  const form = useForm<filterSchemaType>({
    resolver: zodResolver(filterSchema),
    defaultValues: defaultValues,
    shouldUnregister: false,
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
    const newProgressStatus = data.progressStatus;

    if (
      parsedParams.orderBy === newOrderBy &&
      JSON.stringify(parsedParams.progressStatus) ===
        JSON.stringify(newProgressStatus)
    ) {
      return;
    }

    setProcessingStatus(true);

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
              <FieldLabel>Filter by create\update date:</FieldLabel>
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
