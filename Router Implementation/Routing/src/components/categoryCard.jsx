const CategoryCard = (props) => {
  return (
    <div>
      <div className="flex h-96 w-full flex-col items-center justify-center border border-solid border-black bg-slate-300 transition duration-300 ease-in-out hover:bg-slate-400 hover:shadow-lg">
        <h1>Title: {props.title}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
