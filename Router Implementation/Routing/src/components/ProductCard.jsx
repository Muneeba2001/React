const ProductCard = (props) => {
  return (
    <>
      <div className="flex h-96 w-full flex-col items-center justify-center border border-solid border-black bg-slate-300 transition duration-300 ease-in-out hover:bg-slate-400 hover:shadow-lg">
        <img
          className="aspect-square w-1/2"
          src={props.image}
          alt={props.title}
        />
        <h1>Title: {props.title}</h1>
        <h1>Price: {props.price}</h1>
        <h1>Category: {props.category}</h1>
      </div>
    </>
  );
};

export default ProductCard;
