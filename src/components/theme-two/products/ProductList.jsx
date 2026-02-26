import { productsData } from "../../../data/theme2/productsData";
import SectionTitle from "../../../shared/layout/SectionTitle";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <>
      <SectionTitle title="Featured" />
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {productsData.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
