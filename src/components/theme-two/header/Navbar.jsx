import { List, Menu } from "lucide-react";
import Button from "../../../shared/ui/Button";
import NavMenu from "../../../shared/layout/Navmenu";

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
      <div className="xl:col-span-3 col-span-4 max-xl:ms-auto">
        <NavMenu menus={navMenu} variant="theme2" className="max-lg:hidden" />
        <button className="lg:hidden">
            <Menu/>
        </button>
      </div>
      <div className="ms-auto max-xl:hidden">
        <p>Free Shipping on Orders $50+</p>
      </div>
    </nav>
  );
};

export default Navbar;
