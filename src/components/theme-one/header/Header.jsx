import { Link } from "react-router-dom";
import Logo from "../../../../public/images/theme1/logo.png";
import Button from "../../../shared/ui/Button";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Topbar from "./Topbar";
import Container from "../../../shared/layout/Container";
import Navbar from "./Navbar";
import Input from "../../../shared/ui/Input";

const headerMenus = [
  { label: "profile", url: "", icon: <User size={20} /> },
  { label: "Whishlist", url: "", icon: <Heart size={20} /> },
  { label: "Cart", url: "", icon: <ShoppingCart size={20} /> },
];

const Header = () => {
  return (
    <header>
      <Topbar />
      <div className="py-6 border-b border-gray-200">
        <Container className="grid grid-cols-4 items-center">
          <Link>
            <img src={Logo} alt="logo" className="h-12" />
          </Link>
          <div className="col-span-2">
            <div className="border border-gray-200 px-2 py-2 rounded-sm flex items-center gap-4">
              <Input
                placeholder="search products, categories or brands"
                className="w-full outline-0 border-0"
              />
              <Button>
                <Search />
              </Button>
            </div>
          </div>
          <nav className="ml-auto">
            <ul className="flex gap-5">
              {headerMenus.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.url} className="flex items-center">
                    <span className="mr-2">{menu.icon}</span>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
