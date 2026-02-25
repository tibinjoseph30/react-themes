import { Link } from "react-router-dom";
import Logo from "../../../../public/images/theme2/logo.svg";
import { Headset } from "lucide-react";

const AddressBar = () => {
  return (
    <div>
      <img src={Logo} alt={Logo} className="h-10" />
      <div className="flex gap-5 items-center mt-8">
        <Headset size={48} className="text-(--primaryColor)"/>
        <div>
            <p className="text-gray-500 text-sm">Got questions? Call us 24/7!</p>
            <p className="text-xl">(800) 8001-8588, (0600) 874 548</p>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <h6 className="font-semibold">Contact Info</h6>
        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </div>
    </div>
  );
};

export default AddressBar;
