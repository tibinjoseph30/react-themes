import { Link } from "react-router-dom";

const appLinks = [
  { label: "Apple store", icon: "", url: "" },
  { label: "Play store", icon: "", url: "" },
];

const AppStore = () => {
  return (
    <div>
      <h4 className="font-medium text-xl mb-4">Shop on The Go</h4>
      <p className="text-gray-500">MarketPro App is available. Get it now</p>
      <div className="flex gap-4 flex-col mt-6">
        {appLinks.map((link, index) => (
          <Link to={link.url} key={index}>
            <div className="px-6 py-3 rounded-md shadow-sm inline-flex items-center justify-center shadow-gray-300 hover:text-white hover:bg-(--primaryColor) min-w-40">
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppStore;
