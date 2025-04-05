import LoadingSpinner from '@/components/Components/Loading/LoadingSpinner';

const OverlayLoading = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 pointer-events-none"
      role="status"
    >
      <LoadingSpinner />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default OverlayLoading;
