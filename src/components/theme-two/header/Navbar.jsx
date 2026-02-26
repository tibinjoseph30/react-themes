import { List, Menu } from "lucide-react";
import Button from "../../../shared/ui/Button";
import { useState } from "react";
import Logo from "../../../../public/images/theme2/logo.svg";
import { Link } from "react-router-dom";
import Overlay from "../../../shared/layout/Overlay";
import NavMenu from "../../../shared/layout/NavMenu";

const navMenu = [
  { label: "Super Deals", url: "" },
  { label: "Featured Brands", url: "" },
  { label: "Trending Styles", url: "" },
  { label: "Gift Cards", url: "" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        <button onClick={() => setIsOpen(true)} className="lg:hidden">
          <Menu />
        </button>
        {isOpen && (
          <div className="fixed bg-white shadow-md z-40 left-0 top-0 bottom-0 w-75 p-4">
            <div className="mb-6">
              <Link>
                <img src={Logo} alt="logo" className="sm:h-12 h-10" />
              </Link>
            </div>
            <NavMenu
              menus={navMenu}
              variant="theme2"
              className="flex flex-col"
            />
          </div>
        )}
        {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
      </div>
      <div className="ms-auto max-xl:hidden">
        <p>Free Shipping on Orders $50+</p>
      </div>
    </nav>
  );
};

export default Navbar;
