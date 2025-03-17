import Menu from "@/components/Layout/Menu";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default MainLayout;
