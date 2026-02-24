const Button = ({
  children,
  variant = "primary",
  radius = "md",
  className = "",
  type = "button",
  ...rest
}) => {
  const baseStyles =
    "px-4 py-2 font-medium transition duration-200 focus:outline-none inline-flex items-center";

  const variants = {
    primary:
      "bg-[var(--primaryColor)] text-white hover:opacity-90",
    secondary:
      "bg-[var(--secondaryColor)] text-white hover:opacity-90",
  };

  const radiusStyles = {
    md: "rounded-md",
    full: "rounded-full",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${radiusStyles[radius]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;