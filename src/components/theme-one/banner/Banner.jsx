import { ShoppingCart } from "lucide-react";
import Button from "../../../shared/ui/Button";
import BannerImg from "../../../../public/images/theme1/banner-img3.png";
import Container from "../../../shared/layout/Container";

const Banner = () => {
  return (
    <Container>
      <section className="bg-cyan-50 px-12 py-20 my-6 rounded-3xl">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-(--secondaryColor) font-semibold">
              Save up to 50% off on your first order
            </p>
            <h1 className="font-bold text-6xl secondary-font mt-3">
              Daily Grocery Order and Get{" "}
              <span className="text-(--primaryColor)">Express</span> Delivery
            </h1>
            <div className="flex gap-4 items-center mt-8">
              <Button radius="full">
                Explore Shop{" "}
                <span className="ml-3">
                  <ShoppingCart size={20} />
                </span>
              </Button>
              <p className="text-sm">
                <i>Starting at</i>
                <span className="text-red-600 text-2xl ml-3 font-medium">
                  $66.99
                </span>
              </p>
            </div>
          </div>
          <img src={BannerImg} alt={BannerImg} width="432" height="384" />
        </div>
      </section>
    </Container>
  );
};

export default Banner;
