import Logo from '@/components/Layout/Logo';
import Navbar from '@/components/Layout/Navbar';

const Menu = () => {
  return (
    <div className="flex justify-between items-center px-18 py-6 shadow-md">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Menu;
