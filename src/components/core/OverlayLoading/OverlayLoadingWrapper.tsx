import OverlaySpinner from '@/components/core/OverlayLoading/OverlaySpinner';
import OverlayBackground from '@/components/core/OverlayLoading/OverlayBackground';

const OverlayLoadingWrapper = () => {
  return (
    <OverlayBackground>
      <OverlaySpinner />
      <span className="sr-only">Loading...</span>
    </OverlayBackground>
  );
};

export default OverlayLoadingWrapper;
