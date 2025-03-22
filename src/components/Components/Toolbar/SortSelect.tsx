import { Select } from 'radix-ui';
import { ChevronDownIcon } from '@radix-ui/themes';
import { SelectEnum } from '@/types/SelectEnum';

export interface SortSelectProps {
  sortOrder: SelectEnum;
  setSortOrder: (sortOrder: SelectEnum) => void;
}

const SortSelect = ({ sortOrder, setSortOrder }: SortSelectProps) => {
  return (
    <Select.Root
      value={sortOrder}
      onValueChange={setSortOrder}
    >
      <Select.Trigger className="inline-flex items-center justify-between border p-1 rounded w-32 border-1 border-gray-300 text-gray-500">
        <Select.Value placeholder="Sort" />
        <Select.Icon className="ml-2">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="border border-gray-300 rounded shadow bg-white text-gray-500">
          <Select.Viewport className="p-2">
            <Select.Item
              value={SelectEnum.ASCENDING}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded"
            >
              <Select.ItemText>Asc</Select.ItemText>
            </Select.Item>

            <Select.Item
              value={SelectEnum.DESCENDING}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 rounded"
            >
              <Select.ItemText>Desc</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SortSelect;
