'use client';

import { Controller, useForm } from 'react-hook-form';
import {
  filterSchema,
  filterSchemaType,
  paramsSchema,
  paramsSchemaType,
  SortByOptions,
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
import { searchParamsDefaultValues } from '@/app/constants/searchParamsDefaults';
import { useSearchParams } from 'next/navigation';

export function FilterForm() {
  const params = useSearchParams();
  const progressStatusParsed = paramsSchema.shape.progressStatus.safeParse(
    params.get('progressStatus'),
  );
  const sortByParsed = paramsSchema.shape.sortBy.safeParse(
    params.get('sortBy'),
  );

  const sortBy = sortByParsed.success
    ? sortByParsed.data
    : searchParamsDefaultValues.sortBy;
  const progressStatus = progressStatusParsed.success
    ? progressStatusParsed.data
    : searchParamsDefaultValues.progressStatus;

  const defaultValues: filterSchemaType = {
    sortBy,
    progressStatus,
  };

  const form = useForm<filterSchemaType>({
    resolver: zodResolver(filterSchema),
    defaultValues: defaultValues,
  });

  const sortByOptions: SortByOptions = [
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
    console.log(data);
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
          name="sortBy"
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
                    {sortByOptions.map((option, index) => (
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
