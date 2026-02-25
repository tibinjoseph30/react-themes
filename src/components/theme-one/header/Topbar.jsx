import { Link } from "react-router-dom";
import Container from "../../../shared/layout/Container";

const topbarMenu = [
  { label: "Order Tracking", url: "/order-tracking" },
  { label: "About Us", url: "/about" },
];

const Topbar = () => {
  return (
    <div className="bg-(--primaryColor) text-white py-3">
      <Container className="flex justify-between gap-4 items-center">
        <p>
          Until the end of the sale:{" "}
          <span>
            15 <small>days</small>
          </span>
        </p>
        <p className="text-sm">
          Buy one get one free on{" "}
          <span className="text-amber-400">first order</span>
        </p>
        <ul className="flex items-center gap-4 text-sm">
          {topbarMenu.map((item, index) => (
            <li key={index}>
              <Link to={item.url}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Topbar;
