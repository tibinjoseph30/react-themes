import { Search } from "lucide-react";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Searchbar = ({
  variant = "theme1",
  placeholder = "Search...",
  buttonClass = "",
  containerClass = "",
}) => {
  const variants = {
    theme1:
      "border border-gray-200 px-2 py-2 rounded-sm flex items-center gap-4",
    theme2:
      "border-2 border-(--primaryColor) rounded-full overflow-hidden flex items-center",
  };

  const buttonVariants = {
    theme1: "",
    theme2: "rounded-l-none",
  };

  return (
    <div className={`${variants[variant]} ${containerClass}`}>
      <Input
        placeholder={placeholder}
        className="w-full border-0 outline-none"
      />
      <Button className={`${buttonVariants[variant]} ${buttonClass}`}>
        <Search />
      </Button>
    </div>
  );
};

export default Searchbar;
