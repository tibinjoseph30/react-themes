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
        <Container className="grid grid-cols-4 gap-8">
          <div>
            <Deals />
          </div>
          <div className="col-span-3">
            <ProductList />
          </div>
        </Container>
      </Section>
      <Newsletter />
    </>
  );
};

export default ThemeTwoPage;
