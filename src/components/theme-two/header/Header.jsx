import Topbar from "./Topbar";
import Logo from "../../../../public/images/theme2/logo.svg";
import { Link } from "react-router-dom";
import Container from "../../../shared/layout/Container";
import { Heart, Repeat, Search, ShoppingBag } from "lucide-react";
import Navbar from "./Navbar";
import Searchbar from "../../../shared/layout/Searchbar";

const navIcons = [
  { icon: <Repeat size={20} /> },
  { icon: <Heart size={20} /> },
  { icon: <ShoppingBag size={20} /> },
];

const Header = () => {
  return (
    <header>
      <Topbar />
      <Container>
        <div className="xl:grid max-xl:flex grid-cols-5 gap-8 items-center py-6">
          <Link>
            <img src={Logo} alt={Logo} />
          </Link>
          <div className="col-span-3 max-xl:hidden">
            <Searchbar variant="theme2" />
          </div>
          <nav className="ms-auto flex xl:col-span-1 col-span-4 items-center gap-8">
            <button className="xl:hidden">
                <Search size={20}/>
            </button>
            <ul className="flex items-center gap-8">
              {navIcons.map((ico, index) => (
                <li key={index}>
                  <Link>{ico.icon}</Link>
                </li>
              ))}
            </ul>
            <p className="font-semibold max-sm:hidden">$1785.00</p>
          </nav>
        </div>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
