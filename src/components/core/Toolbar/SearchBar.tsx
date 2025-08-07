import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { SearchBarProps } from '@/types/common';

const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  return (
    <div className="flex items-center border border-shadow bg-white rounded p-1 w-full max-w-md">
      <MagnifyingGlassIcon
        className="w-5 h-5 mx-2 text-shadow"
        aria-label="Blog posts search icon"
      />
      <input
        type="text"
        placeholder="Search blog posts"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-transparent outline-none placeholder-shadow focus:border-primary w-full"
        role="textbox"
        aria-label="Blog posts search bar"
      />
    </div>
  );
};

export default SearchBar;
