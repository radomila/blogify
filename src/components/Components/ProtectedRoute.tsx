import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import OverlayLoading from '@/components/Components/OverlayLoading/OverlayLoading';
import { useRouter } from 'next/navigation';

interface Props {
  children?: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const { user, authLoading } = useAuth();
  const router = useRouter();
  if (authLoading) {
    return <OverlayLoading />;
  }

  if (user) {
    return children;
  }

  if (!authLoading && !user) {
    router.push('/signin');
  }

  return null;
};

export default ProtectedRoute;
