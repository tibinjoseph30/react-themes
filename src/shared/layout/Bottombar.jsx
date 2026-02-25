const Bottombar = ({ copyright, className = "" }) => {
  return (
    <div className={className}>
      <p>{copyright}</p>
    </div>
  );
};

export default Bottombar;
