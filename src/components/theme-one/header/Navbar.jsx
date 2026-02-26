import { Grid2X2, Menu, Smartphone } from "lucide-react";
import Button from "../../../shared/ui/Button";
import Container from "../../../shared/layout/Container";
import NavMenu from "../../../shared/layout/Navmenu";
import { useState } from "react";
import Logo from "../../../../public/images/theme1/logo.png";
import { Link } from "react-router-dom";
import Overlay from "../../../shared/layout/Overlay";

const navbarMenu = [
  { label: "Home", url: "" },
  { label: "Shop", url: "" },
  { label: "Pages", url: "" },
  { label: "Vendors", url: "" },
  { label: "Blog", url: "" },
  { label: "Contact Us", url: "" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-2 shadow-lg shadow-gray-100">
      <Container className="grid grid-cols-4 items-center">
        <div>
          <Button variant="secondary" className="px-6 py-4">
            <span className="mr-2">
              <Grid2X2 />
            </span>
            Browse Categories
          </Button>
        </div>
        <div className="col-span-2 max-xl:hidden">
          <NavMenu menus={navbarMenu} variant="theme1" />
        </div>
        <div className="flex gap-4 items-center ml-auto xl:col-span-1 col-span-3">
          <div className="flex items-center gap-4 max-sm:hidden">
            <Smartphone className="text-(--primaryColor)" />
            <div className="font-medium">
              <p>Need any Help! call Us</p>
              <p className="text-(--primaryColor)">+2 871 382 023</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(true)} className="xl:hidden">
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
                menus={navbarMenu}
                variant="theme1"
                className="flex flex-col"
              />
            </div>
          )}
          {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
