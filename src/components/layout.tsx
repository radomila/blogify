import Menu from "@/components/menu";

interface LayoutProps {
  children: Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default Layout;
