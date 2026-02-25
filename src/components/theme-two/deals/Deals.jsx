import ProductImg from "../../../../public/images/theme2/products/prod-big.jpg";

const Deals = () => {
  return (
    <article className="p-5 border-2 border-(--primaryColor) rounded-2xl">
      <header className="flex items-center justify-between">
        <h4 className="text-2xl">
          Special
          <br />
          Offer
        </h4>
        <div className="w-18 h-18 rounded-full bg-(--primaryColor) flex flex-col items-center justify-center">
          <p className="text-xs">Save</p>
          <p className="font-semibold text-lg">$120</p>
        </div>
      </header>
      <section>
        <img src={ProductImg} alt={ProductImg} />
        <div className="w-2/3 text-center mx-auto">
          <h5 className="font-bold text-blue-600">
            Game Console Controller + USB 3.0 Cable
          </h5>
          <p className="text-xl mt-3">
            <span className="mr-2 line-through">$99.00</span>
            <span className="text-2xl font-semibold text-red-600">$79.00</span>
          </p>
        </div>
      </section>
    </article>
  );
};

export default Deals;
