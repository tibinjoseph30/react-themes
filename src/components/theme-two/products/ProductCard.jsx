import { Heart, Repeat, ShoppingCart } from "lucide-react";
import Button from "../../../shared/ui/Button";

const ProductCard = ({ productName, productImg, price, category }) => {
  return (
    <article className="relative">
      <div className="bg-white group hover:shadow-lg border hover:absolute hover:z-10 hover:border-gray-100 shadow-gray-300 border-white shad px-5 py-4">
        <span className="text-sm text-gray-500">{category}</span>
        <h5 className="font-bold text-blue-600 line-clamp-2">{productName}</h5>
        <div>
          <img src={productImg} alt={productImg} className="mx-auto" />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl">{price}</p>
          <button className="w-8 h-8 bg-(--primaryColor) rounded-full hover:-translate-y-1 transition duration-200 text-white inline-flex items-center justify-center">
            <ShoppingCart size={18} />
          </button>
        </div>
        <div className="hidden group-hover:flex justify-between items-center py-3 border-t border-gray-100 mt-3">
          <Button variant="link" className="text-xs">
            <Repeat size={14} className="mr-1" />
            Compare
          </Button>
          <Button variant="link" className="text-xs">
            <Heart size={14} className="mr-1" />
            Add to Whishlist
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
