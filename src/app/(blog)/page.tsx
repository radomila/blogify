'use client';

import { useMemo, useState } from 'react';
import PostsList from '@/components/Components/Post/PostsList';
import Toolbar from '@/components/Components/Toolbar/Toolbar';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/services/PostService';
import NoPostsFound from '@/components/NoPostsFound';
import { SelectEnum } from '@/types/SelectEnum';
import OverlayLoading from '@/components/Components/OverlayLoading/OverlayLoading';

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<SelectEnum>(SelectEnum.ASCENDING);

  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  });

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (searchValue) {
      result = posts?.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));
    }
    return result?.sort((a, b) => {
      if (sortOrder === SelectEnum.ASCENDING) {
        return (a.createdAt?.getTime() ?? 0) - (b.createdAt?.getTime() ?? 0);
      } else {
        return (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0);
      }
    });
  }, [searchValue, posts, sortOrder]);

  if (isLoading) {
    return <OverlayLoading />;
  }
  return (
    <>
      <Toolbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      {filteredPosts && filteredPosts.length > 0 ? <PostsList posts={filteredPosts ?? []} /> : <NoPostsFound />}
    </>
  );
};

export default Home;
