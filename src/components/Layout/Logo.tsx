const Logo = () => {
  return (
    <div
      className="flex items-center gap-3"
      role="banner"
      aria-label="Blogify logo"
    >
      <img
        src="/Logo.svg"
        alt="logo"
        aria-labelledby="blogify-logo"
      />
      <p
        className="text-xl tracking-wider text-gray-800 font-medium"
        id="blogify-logo"
      >
        Blogify
      </p>
    </div>
  );
};

export default Logo;
