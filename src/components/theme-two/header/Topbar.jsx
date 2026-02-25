import { MapPin, User, Van } from "lucide-react";
import Container from "../../../shared/layout/Container";
import { Link } from "react-router-dom";

const topbarMenu = [
  { label: "Store Locator", url: "", icon: <MapPin size={18} /> },
  { label: "Track Your Order", url: "", icon: <Van size={18} /> },
  { label: "Register or Sign in", url: "", icon: <User size={18} /> },
];

const Topbar = () => {
  return (
    <div className="border-b border-gray-200 py-2">
      <Container className="flex items-center justify-between gap-8 text-sm">
        <p>Welcome to Worldwide Electronics Store</p>
        <nav>
          <ul className="flex gap-6">
            {topbarMenu.map((link, index) => (
              <li key={index} className="not-last:border-r border-gray-200 not-last:pr-6">
                <Link className="inline-flex items-center">
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Topbar;
