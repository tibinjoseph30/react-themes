import { Link } from "react-router-dom";

const FooterMenu = ({ title, links=[], className="" }) => {
  return (
    <div>
      <h6 className="mb-4 font-medium text-xl">{title}</h6>
      <ul className="space-y-3">
        {links.map((link, index)=> (
            <li key={index}>
                <Link to={link.url} className="hover:text-(--primaryColor)">{link.label}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
