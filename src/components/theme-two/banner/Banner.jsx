import Container from "../../../shared/layout/Container";
import Button from "../../../shared/ui/Button";
import BannerImg from "../../../../public/images/theme2/banner-img.png";

const Banner = () => {
  return (
    <section className="section-banner">
      <Container>
        <div className="flex justify-center items-center gap-40">
          <div>
            <h1 className="uppercase text-6xl">
              the new
              <br />
              <span className="text-5xl">standard</span>
            </h1>
            <p className="uppercase font-bold mt-3">under favourable smartwatches</p>
            <div className="mt-4">
              <p>From</p>
              <p className="text-5xl font-bold inline-flex items-start leading-none">
                <span className="text-xl">$</span> 749 <span className="text-xl">99</span>
              </p>
            </div>
            <Button className="mt-6 min-w-42">Start Buying</Button>
          </div>
          <img src={BannerImg} alt={BannerImg} />
        </div>
      </Container>
    </section>
  );
};

export default Banner;
