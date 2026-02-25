const Button = ({
  children,
  variant = "primary",
  radius = "md",
  className = "",
  type = "button",
  ...rest
}) => {
  const baseStyles =
    "px-5 py-3 font-medium cursor-pointer transition duration-200 whitespace-nowrap focus:outline-none inline-flex items-center justify-center";

  const variants = {
    primary: "bg-(--primaryColor) text-(--textPrimaryColor) hover:opacity-90",
    secondary: "bg-(--secondaryColor) text-white hover:opacity-90",
    primaryLight: "bg-(--primaryColor)/10 text-(--primaryColor) hover:bg-(--primaryColor) hover:text-white",
    link: "bg-transparent !p-0"
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
