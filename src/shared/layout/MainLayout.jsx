import Footer from "../../components/theme-one/footer/Footer";
import Header from "../../components/theme-one/header/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="theme1">
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
