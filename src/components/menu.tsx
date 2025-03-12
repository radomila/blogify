import Logo from "@/components/logo";
import Navbar from "@/components/navbar";

const Menu = () => {
  return (
    <div className="flex justify-between items-center px-18 py-6">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Menu;
