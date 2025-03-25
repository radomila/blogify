import { Dispatch, SetStateAction } from 'react';
import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export interface SearchBarProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  return (
    <TextField.Root
      placeholder="Search the posts..."
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      role="search"
      aria-label="Search bar for blog posts"
    >
      <TextField.Slot>
        <MagnifyingGlassIcon
          height="16"
          width="16"
          role="img"
          aria-label="Magnifying glass icon"
        />
      </TextField.Slot>
    </TextField.Root>
  );
};

export default SearchBar;
