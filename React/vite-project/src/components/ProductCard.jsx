const ProductCard = (props) => {
  return (
    <>
      <style>
        {`
 .page-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px; /* Minimal padding for the whole grid */
  justify-content: center; /* Center the cards within the container */
}

.container {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px; /* Padding inside each card */
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px; /* Gap between items in the card */
  width: calc(33.333% - 32px); /* Three cards per row, minus the gap */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  margin: 0 auto; /* Center each card in its row */
}

.container h1 {
  margin: 8px 0;
  font-size: 18px;
  grid-column: span 2; /* Make the title span across both columns */
}



  `}
      </style>
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
