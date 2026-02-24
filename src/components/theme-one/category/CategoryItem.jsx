import { Link } from "react-router-dom";

const CategoryItem = ({ categoryName, categoryImg, productCount }) => {
  return (
    <div className="flex flex-col items-center">
      <Link>
        <div className="w-36 h-36 rounded-full flex items-center justify-center bg-green-100">
          <img src={categoryImg} alt={categoryImg} />
        </div>
      </Link>
      <h5 className="font-semibold text-lg mt-3">{categoryName}</h5>
      <p className="text-gray-400 text-sm">{productCount} Products</p>
    </div>
  );
};

export default CategoryItem;
