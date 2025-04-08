import { Dispatch, SetStateAction } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export interface SearchBarProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  return (
    <div className="flex items-center border border-[#57595B] bg-white rounded p-1 w-full max-w-md">
      <MagnifyingGlassIcon
        className="w-5 h-5 mx-2 text-[#57595B]"
        aria-label="Blog posts search icon"
      />
      <input
        type="text"
        placeholder="Search blog posts"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-transparent outline-none placeholder-[#57595B] focus:border-[#0045DB] w-full"
        role="textbox"
        aria-label="Blog posts search bar"
      />
    </div>
  );
};

export default SearchBar;
