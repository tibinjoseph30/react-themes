const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={`border border-gray-200 rounded-md ${className}`}
    />
  );
};

export default Input;
