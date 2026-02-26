import { Link } from "react-router-dom";
import Logo from "../../../../public/images/theme1/logo.png";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Topbar from "./Topbar";
import Container from "../../../shared/layout/Container";
import Navbar from "./Navbar";
import Searchbar from "../../../shared/layout/Searchbar";

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
        <Container className="lg:grid flex grid-cols-4 items-center">
          <Link>
            <img src={Logo} alt="logo" className="sm:h-12 h-10" />
          </Link>
          <div className="col-span-2 max-xl:hidden">
            <Searchbar />
          </div>
          <nav className="ml-auto xl:col-span-1 col-span-3 flex items-center sm:gap-6 gap-4">
            <button className="xl:hidden">
              <Search size={20} />
            </button>
            <ul className="flex sm:gap-5 gap-4">
              {headerMenus.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.url} className="flex items-center">
                    <span className="sm:mr-2">{menu.icon}</span>
                    <span className="max-md:hidden">{menu.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
