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
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';

export function FilterForm() {
  const { setProcessingStatus } = useContext(FormProcessingContext);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const progressStatusParsed = paramsSchema.shape.progressStatus.safeParse(
    searchParams.get('progressStatus'),
  );

  const orderByParsed = paramsSchema.shape.orderBy.safeParse(
    searchParams.get('orderBy'),
  );

  const orderBy = orderByParsed.success
    ? orderByParsed.data
    : searchParamsDefaultValues.orderBy;
  const progressStatus = progressStatusParsed.success
    ? progressStatusParsed.data
    : searchParamsDefaultValues.progressStatus;

  const defaultValues: filterSchemaType = {
    orderBy,
    progressStatus,
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
    setProcessingStatus(true);
    const orderByParams = data.orderBy;
    const progressStatusParams = data.progressStatus.join(',');

    const params = new URLSearchParams(searchParams.toString());
    params.set('orderBy', orderByParams);
    params.set('progressStatus', progressStatusParams);
    params.set('page', searchParamsDefaultValues.page.toString());

    return router.replace(`${pathname}?${params}`, { scroll: false });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      id="filter-form"
      className="w-fit flex flex-col gap-[20px]"
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
