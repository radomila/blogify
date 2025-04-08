'use client';

import { useMemo, useState } from 'react';
import PostsList from '@/components/Components/Post/PostsList';
import Toolbar from '@/components/Components/Toolbar/Toolbar';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/services/PostService';
import NoPostsFound from '@/components/NoPostsFound';
import { SelectEnum } from '@/types/SelectEnum';
import LoadingSpinner from '@/components/Components/Loading/LoadingSpinner';
import { Separator } from 'radix-ui';
import { Heading } from '@radix-ui/themes';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<SelectEnum>(SelectEnum.DESCENDING);

  const { data: posts, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  const normalizedText = (text: string) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (searchValue) {
      result = posts?.filter((post) => normalizedText(post.title).includes(normalizedText(searchValue)));
    }
    return result?.sort((a, b) => {
      if (sortOrder === SelectEnum.ASCENDING) {
        return (a.createdAt?.getTime() ?? 0) - (b.createdAt?.getTime() ?? 0);
      } else {
        return (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0);
      }
    });
  }, [searchValue, posts, sortOrder]);

  return (
    <div className="flex flex-col mx-auto mt-10 max-w-xs w-full md:max-w-3xl xl:max-w-6xl">
      <Heading
        as="h1"
        size="7"
        role="heading"
        aria-level={1}
      >
        Blog Posts
      </Heading>
      <Toolbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <Separator.Root className="my-[50px] bg-[#57595B] data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px" />
      {isFetching ? <LoadingSpinner /> : <>{filteredPosts && filteredPosts?.length > 0 ? <PostsList posts={filteredPosts ?? []} /> : <NoPostsFound />}</>}
    </div>
  );
};

export default Home;
