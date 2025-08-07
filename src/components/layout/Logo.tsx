const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <img
        src="/icons/logo.svg"
        alt="Blogify logo"
        className="w-15 h-15"
      />
      <p className="text-xl tracking-wider font-medium">Blogify</p>
    </div>
  );
};

export default Logo;
