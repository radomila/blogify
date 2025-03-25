import Logo from '@/components/Layout/Logo';
import Navbar from '@/components/Layout/Navbar';
import Link from 'next/link';

const Menu = () => {
  return (
    <div
      className="flex justify-between items-center px-18 py-6 shadow-md"
      role="menubar"
      aria-label="Menu"
    >
      <Link
        href="/"
        role="link"
      >
        <Logo />
      </Link>
      <Navbar />
    </div>
  );
};

export default Menu;
