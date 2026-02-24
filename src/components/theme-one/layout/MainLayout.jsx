import Header from "../header/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="theme1">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
