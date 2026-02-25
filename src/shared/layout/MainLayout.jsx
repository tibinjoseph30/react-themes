import { Outlet } from "react-router-dom";
import { themes } from "../../utils/themeConfig";
import ThemeSwitcher from "../ThemeSwitcher";

const MainLayout = ({ theme = "theme1" }) => {
  const selectedTheme = themes[theme];
  if (!selectedTheme) return null;

  const { Header, Footer, className } = selectedTheme;

  return (
    <div className={className}>
      <Header />
      <main>
        <Outlet />
      </main>
      {Footer && <Footer />}
      <ThemeSwitcher />
    </div>
  );
};

export default MainLayout;
