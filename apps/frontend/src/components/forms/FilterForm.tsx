'use client';

import { Controller, useForm } from 'react-hook-form';
import {
  filterSchema,
  filterSchemaType, OrderByOptions, SortByOptions,
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
import { Field, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { DateSort } from '@/components/custom-ui/DateSort';

export function FilterForm() {
  const form = useForm<filterSchemaType>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      sortBy: 'createdAt',
      orderBy: 'desc',
    },
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

  const orderOptions: OrderByOptions = [
    {
      value: 'desc',
      label: 'Decrease',
    },
    {
      value: 'asc',
      label: 'Increase',
    },
  ];

  return (
    <form id="filter-form" className="w-fit flex flex-col gap-[20px]">
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
                    {sortByOptions.map((option) => (
                      <SelectItem
                        className="cursor-pointer"
                        value={option.value}
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
        {/*<Controller*/}
        {/*  control={form.control}*/}
        {/*  name="orderBy"*/}
        {/*  render={({ field, fieldState }) => (*/}
        {/*    <Field>*/}
        {/*      <FieldLabel*/}
        {/*        htmlFor={field.name}*/}
        {/*        className="cursor-pointer flex-[unset]! bg-transparent! gap-[3px]"*/}
        {/*      >*/}
        {/*        <span>Date</span>*/}
        {/*        <DateSort*/}
        {/*          id={field.name}*/}
        {/*          checked={field.value === 'desc'}*/}
        {/*          onCheckedChange={(checked) => {*/}
        {/*            const newValue: filterSchemaType['orderBy'] = checked*/}
        {/*              ? 'desc'*/}
        {/*              : 'asc';*/}
        {/*            field.onChange(newValue);*/}
        {/*          }}*/}
        {/*        />*/}
        {/*      </FieldLabel>*/}
        {/*    </Field>*/}
        {/*  )}*/}
        {/*/>*/}
      </FieldSet>
    </form>
  );
}
