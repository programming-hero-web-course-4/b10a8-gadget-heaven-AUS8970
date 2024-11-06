// import { Link } from "react-router-dom";

// const categories = [
//   "All Products",
//   "Laptops",
//   "Phones",
//   "Accessories",
//   "Smart Watches",
//   "MacBooks",
//   "iPhones",
// ];

const Sidebar = ({onSelect}) => {
  function handleSelect(category) {
    if (category === "All Products") onselect("all");
    onSelect(category.toLowerCase());
  }

  return (
    <div className="w-1/5">
      {categories.map((category, idx) => {
        <button key={idx} className="" onClick={()=> handleSelect(category)}>
          {category}
        </button>
      })}
      {/* <div className="w-1/5 bg-gray-200 rounded-xl p-4">
        {categories.map(category => (
          <Link
            key={category.category}
            to={`/category/${category.category}`}
            className="flex flex-col mb-4 bg-red-200 p-3 rounded-xl "
          >{category.category}</Link>
        ))}
      </div> */}
    </div>
  );
};

export default Sidebar;
