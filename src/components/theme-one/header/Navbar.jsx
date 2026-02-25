import { Grid2X2, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../../shared/ui/Button";
import Container from "../../../shared/layout/Container";

const navbarMenu = [
  { label: "Home", url: "" },
  { label: "Shop", url: "" },
  { label: "Pages", url: "" },
  { label: "Vendors", url: "" },
  { label: "Blog", url: "" },
  { label: "Contact Us", url: "" },
];

const Navbar = () => {
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
        <ul className="col-span-2 flex gap-10 items-center">
          {navbarMenu.map((menu, index) => (
            <li key={index}>
              <Link to={menu.url} className="font-medium hover:text-(--primaryColor)">
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center ml-auto">
          <Smartphone className="text-(--primaryColor)" />
          <div className="font-medium">
            <p>Need any Help! call Us</p>
            <p  className="text-(--primaryColor)">+2 871 382 023</p>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
