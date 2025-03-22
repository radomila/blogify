import SearchBar, { SearchBarProps } from '@/components/Components/Toolbar/SearchBar';
import SortSelect, { SortSelectProps } from '@/components/Components/Toolbar/SortSelect';
import { PlusIcon } from '@radix-ui/react-icons';
import LinkButton from '@/components/Components/Button/LinkButton';
import { useAuth } from '@/hooks/useAuth';

interface Props extends SearchBarProps, SortSelectProps {}

const Toolbar = ({ searchValue, setSearchValue, sortOrder, setSortOrder }: Props) => {
  const { user } = useAuth();
  return (
    <div className="flex justify-between items-center mt-20 px-10">
      <div className="flex gap-8">
        <SortSelect
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      {user && (
        <LinkButton
          href="/create"
          variant="create"
          size="detail"
        >
          <PlusIcon />
          Create Post
        </LinkButton>
      )}
    </div>
  );
};

export default Toolbar;
