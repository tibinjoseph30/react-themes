import { List } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../../shared/ui/Button";

const navMenu = [
  { label: "Super Deals", url: "" },
  { label: "Featured Brands", url: "" },
  { label: "Trending Styles", url: "" },
  { label: "Gift Cards", url: "" },
];

const Navbar = () => {
  return (
    <nav className="grid grid-cols-5 items-center">
      <div>
        <Button className="px-6 py-4">
          <span className="mr-2">
            <List />
          </span>
          All Departments
        </Button>
      </div>
      <ul className="col-span-3 flex gap-8">
        {navMenu.map((menu, index) => (
          <li key={index}>
            <Link to={menu.url} className="font-bold hover:text-black">{menu.label}</Link>
          </li>
        ))}
      </ul>
      <p className="ms-auto">Free Shipping on Orders $50+</p>
    </nav>
  );
};

export default Navbar;
