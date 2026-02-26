const Overlay = ({ onClick }) => {
  return (
    <div onClick={onClick} className="bg-black/90 z-30 fixed inset-0"></div>
  );
};

export default Overlay;
