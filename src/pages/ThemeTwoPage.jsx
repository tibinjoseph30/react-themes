import Banner from "../components/theme-two/banner/Banner";
import Deals from "../components/theme-two/deals/Deals";
import Newsletter from "../components/theme-two/newsletter/Newsletter";
import ProductList from "../components/theme-two/products/ProductList";
import Container from "../shared/layout/Container";
import Section from "../shared/layout/Section";

const ThemeTwoPage = () => {
  return (
    <>
      <Banner />
      <Section>
        <Container className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8">
          <div>
            <Deals />
          </div>
          <div className="xl:col-span-3 sm:col-span-2">
            <ProductList />
          </div>
        </Container>
      </Section>
      <Newsletter />
    </>
  );
};

export default ThemeTwoPage;
