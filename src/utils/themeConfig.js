import ThemeOneHeader from "../components/theme-one/header/Header";
import ThemeTwoHeader from "../components/theme-two/header/Header";
import ThemeOneFooter from "../components/theme-one/footer/Footer";
import ThemeTwoFooter from "../components/theme-two/footer/Footer";

export const themes = {
  theme1: {
    Header: ThemeOneHeader,
    Footer: ThemeOneFooter,
    className: "theme1",
  },
  theme2: {
    Header: ThemeTwoHeader,
    Footer: ThemeTwoFooter,
    className: "theme2",
  },
};