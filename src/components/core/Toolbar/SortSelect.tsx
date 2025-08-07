import { Select } from 'radix-ui';
import { ChevronDownIcon } from '@radix-ui/themes';
import { SelectEnum } from '@/types/SelectEnum';
import { SortSelectProps } from '@/types/common';

const SortSelect = ({ sortOrder, setSortOrder }: SortSelectProps) => {
  return (
    <Select.Root
      value={sortOrder}
      onValueChange={setSortOrder}
    >
      <Select.Trigger
        className="inline-flex items-center justify-between border p-1 rounded w-32 border-1 border-shadow text-shadow bg-background-light"
        aria-label="Select an option"
      >
        <Select.Value placeholder="Sort by" />
        <Select.Icon className="ml-2">
          <ChevronDownIcon
            role="img"
            aria-label="Chevron down icon"
          />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="border border-shadow rounded shadow bg-background-light text-shadow">
          <Select.Viewport className="p-2">
            <Select.Item
              id="desc"
              value={SelectEnum.DESCENDING}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-shadow-light rounded"
            >
              <Select.ItemText aria-label="Descending">Desc</Select.ItemText>
            </Select.Item>
            <Select.Item
              id="asc"
              value={SelectEnum.ASCENDING}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-shadow-light rounded"
            >
              <Select.ItemText aria-label="Ascending">Asc</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SortSelect;
