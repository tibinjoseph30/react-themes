import Banner from "../components/theme-one/banner/Banner";
import CategoryList from "../components/theme-one/category/CategoryList";
import Container from "../components/theme-one/layout/Container";
import MainLayout from "../components/theme-one/layout/MainLayout";

const ThemeLayoutOne = () => {
  return (
    <MainLayout>
        <Container>
            <Banner/>
            <CategoryList/>
        </Container>
    </MainLayout>
  );
};

export default ThemeLayoutOne;
