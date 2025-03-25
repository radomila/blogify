const OverlayLoading = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 pointer-events-none"
      aria-label="Loading spinner"
    >
      <div className="w-25 h-25 border-4 border-blue-500 border-b-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default OverlayLoading;
