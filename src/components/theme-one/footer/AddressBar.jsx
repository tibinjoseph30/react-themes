import { Link } from "react-router-dom";
import Logo from "../../../../public/images/theme1/logo.png";

const AddressBar = () => {
  return (
    <div>
      <img src={Logo} alt={Logo} className="h-10" />
      <p className="mt-6">
        We're Grocery Shop, an innovative team of food supliers.
      </p>
      <div className="font-medium flex flex-col gap-3 mt-4">
        <p className="mt-4">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        <Link to="">support@example.com</Link>
        <p>+ (406) 555-0120</p>
      </div>
    </div>
  );
};

export default AddressBar;
