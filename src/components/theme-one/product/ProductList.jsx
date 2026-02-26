import { productsData } from "../../../data/theme1/productsData";
import Container from "../../../shared/layout/Container";
import Section from "../../../shared/layout/Section";
import SectionTitle from "../../../shared/layout/SectionTitle";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title="Flash Sales Today"/>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {productsData.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProductList;
