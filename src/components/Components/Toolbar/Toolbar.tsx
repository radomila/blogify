import SearchBar, { SearchBarProps } from '@/components/Components/Toolbar/SearchBar';
import SortSelect, { SortSelectProps } from '@/components/Components/Toolbar/SortSelect';
import { PlusIcon } from '@radix-ui/react-icons';
import LinkButton from '@/components/Components/Button/LinkButton';
import { useAuth } from '@/hooks/useAuth';
import { Text } from '@radix-ui/themes';

interface Props extends SearchBarProps, SortSelectProps {}

const Toolbar = ({ searchValue, setSearchValue, sortOrder, setSortOrder }: Props) => {
  const { user } = useAuth();
  return (
    <div
      className="flex md:flex-row md:justify-between md:items-end flex-col items-start mt-[50px] gap-10"
      role="group"
      aria-label="Blog posts toolbar"
    >
      <div className="flex md:flex-row gap-8 flex-col">
        <div>
          <Text
            as="p"
            className="font-medium pb-2"
          >
            Search
          </Text>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>

        <div>
          <Text
            as="p"
            className="font-medium pb-2"
          >
            Sort by
          </Text>
          <SortSelect
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>
      </div>

      {user && (
        <LinkButton
          href="/create"
          variant="create"
          size="create"
          aria-label="Create post link"
        >
          <PlusIcon
            role="img"
            aria-label="Plus icon"
          />
          Create Post
        </LinkButton>
      )}
    </div>
  );
};

export default Toolbar;
