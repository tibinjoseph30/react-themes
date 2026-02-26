import { Link } from "react-router-dom";

const NavMenu = ({
  menus = [],
  variant = "theme1",
  className = "",
}) => {
  const variants = {
    theme1: {
      ul: "flex gap-10 items-center",
      link: "font-medium hover:text-(--primaryColor)",
    },
    theme2: {
      ul: "flex gap-8",
      link: "font-bold hover:text-black",
    },
  };

  const current = variants[variant];

  return (
    <ul className={`${current.ul} ${className}`}>
      {menus.map((menu, index) => (
        <li key={index}>
          <Link to={menu.url} className={current.link}>
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;