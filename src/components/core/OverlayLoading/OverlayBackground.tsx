import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const OverlayBackground = ({ children }: Props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50 pointer-events-none"
      role="status"
    >
      {children}
    </div>
  );
};

export default OverlayBackground;
