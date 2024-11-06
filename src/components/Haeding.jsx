
const Haeding = ({title, subtitle}) => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold"> {title} </h1>
      <p className="text-xl text-center"> {subtitle} </p>
    </div>
  );
};

export default Haeding;