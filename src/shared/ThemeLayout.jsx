import { Link } from "react-router-dom";

const themeMenu = [
  { label: "Theme 1", url: "/" },
  { label: "Theme 2", url: "/theme2" },
];

const ThemeLayout = () => {
  return (
    <div className="bg-black/90 text-white fixed z-15 right-3 bottom-20 w-[200px] rounded-xl p-5">
      <ul className="space-y-3">
        {themeMenu.map((theme, index) => (
          <li key={index}>
            <Link to={theme.url} className="px-4 py-3 block hover:bg-white hover:text-blue-500 rounded-md">{theme.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeLayout;
