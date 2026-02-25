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
      className={`border border-gray-200 bg-white px-5 py-3 rounded-md focus:outline-0 ${className}`}
    />
  );
};

export default Input;
