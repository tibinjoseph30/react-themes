import Topbar from "./Topbar";
import Logo from "../../../../public/images/theme2/logo.svg";
import { Link } from "react-router-dom";
import Container from "../../../shared/layout/Container";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import { Heart, Repeat, Search, ShoppingBag } from "lucide-react";
import Navbar from "./Navbar";

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
        <div className="grid grid-cols-5 items-center py-6">
          <Link>
            <img src={Logo} alt={Logo} />
          </Link>
          <div className="col-span-3 border-2 border-(--primaryColor) rounded-full overflow-hidden flex items-center">
            <Input
              placeholder="Search for Products"
              className="border-0 w-full"
            />
            <Button className="rounded-none">
              <Search />
            </Button>
          </div>
          <nav className="ms-auto flex items-center gap-3">
            <ul className="flex items-center gap-8">
              {navIcons.map((ico, index) => (
                <li key={index}>
                  <Link>{ico.icon}</Link>
                </li>
              ))}
            </ul>
            <p className="font-semibold">$1785.00</p>
          </nav>
        </div>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
