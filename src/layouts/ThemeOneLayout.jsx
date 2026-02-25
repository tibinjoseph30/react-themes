import Banner from "../components/theme-one/banner/Banner";
import CategoryList from "../components/theme-one/category/CategoryList";
import Container from "../shared/layout/Container";
import MainLayout from "../shared/layout/MainLayout";
import ProductList from "../components/theme-one/product/ProductList";
import Newsletter from "../components/theme-one/newsletter/Newsletter";

const ThemeLayoutOne = () => {
  return (
    <MainLayout>
      <Banner />
      <CategoryList />
      <ProductList />
      <Newsletter/>
    </MainLayout>
  );
};

export default ThemeLayoutOne;
