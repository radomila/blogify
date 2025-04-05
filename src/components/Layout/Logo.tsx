const Logo = () => {
  return (
    <div
      className="flex items-center gap-1"
      role="banner"
      aria-label="Blogify logo"
    >
      <img
        src="/logo.svg"
        alt="Blogify logo"
        aria-labelledby="blogify-logo"
        className="w-15 h-15"
      />
      <p
        className="text-xl tracking-wider font-medium"
        id="blogify-logo"
      >
        Blogify
      </p>
    </div>
  );
};

export default Logo;
