import { Controller, UseFormReturn } from 'react-hook-form';
import { filterSchemaType } from 'shared-types';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { GuideProgressBadge } from '@/components/custom-ui/GuideProgressBadge';
import { GuideProgressStatus } from 'database/enums';
import { FilterProgressButton } from '@/components/custom-ui/FilterProgressButton';
import { Field, FieldLabel } from '@/components/ui/field';
import { searchParamsDefaultValues } from '@/app/constants/searchParamsDefaults';

export function FilterProgressGroup({
  form,
}: {
  form: UseFormReturn<filterSchemaType>;
}) {
  const toggleOptions = Object.values(GuideProgressStatus);
  return (
    <Controller
      control={form.control}
      name="progressStatus"
      render={({ field, fieldState }) => (
        <Field aria-invalid={fieldState.invalid}>
          <FieldLabel>Filter by progress status:</FieldLabel>
          <ToggleGroup
            type="multiple"
            value={field.value}
            onValueChange={(value) => {
              if (!value.length) {
                field.onChange(searchParamsDefaultValues.progressStatus);
              } else {
                field.onChange(value);
              }
            }}
          >
            {toggleOptions.map((status, index) => {
              const isActive = field.value.includes(status);
              return (
                <FilterProgressButton
                  key={index}
                  status={status}
                  isActive={isActive}
                />
              );
            })}
          </ToggleGroup>
        </Field>
      )}
    />
  );
}
