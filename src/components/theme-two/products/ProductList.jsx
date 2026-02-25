import { productsData } from "../../../data/theme2/productsData";
import SectionTitle from "../../../shared/layout/SectionTitle";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <>
      <SectionTitle title="Featured" />
      <div className="grid grid-cols-4 gap-4">
        {productsData.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
