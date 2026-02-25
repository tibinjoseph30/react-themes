import { ShoppingCart } from "lucide-react";
import Button from "../../../shared/ui/Button";

const ProductCard = ({ productName, productImg, price, badge }) => {
  return (
    <article className="border border-gray-200 rounded-md p-4">
      <div className="py-8 relative group">
        {badge && (
          <span
            className={`absolute top-0 left-0 z-10 inline-block text-white text-sm px-3 py-1 rounded-tl-2xl rounded-br-2xl ${badge === "Best Sale" ? "bg-blue-600" : badge === "New" ? "bg-amber-500" : "bg-red-600"}`}
          >
            {badge}
          </span>
        )}
        <img src={productImg} alt={productImg} className="mx-auto h-40 group-hover:scale-110 duration-200" />
      </div>
      <h5 className="line-clamp-2 mb-3">{productName}</h5>
      <p className="font-semibold mb-3">{price}</p>
      <Button radius="full" variant="primaryLight" className="w-full">
        Add to Cart{" "}
        <span className="ml-3">
          <ShoppingCart size={18} />
        </span>
      </Button>
    </article>
  );
};

export default ProductCard;
