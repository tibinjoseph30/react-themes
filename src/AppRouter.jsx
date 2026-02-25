import { Route, Routes } from "react-router-dom";
import ThemeOnePage from "./pages/ThemeOnePage";
import ThemeTwoPage from "./pages/ThemeTwoPage";
import MainLayout from "./shared/layout/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout theme="theme1"/>}>
        <Route path="/" element={<ThemeOnePage />} />
      </Route>
      <Route element={<MainLayout theme="theme2" />}>
        <Route path="theme2" element={<ThemeTwoPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
