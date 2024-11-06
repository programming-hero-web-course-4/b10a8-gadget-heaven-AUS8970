import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

const Categories = ({ categories }) => {
  const location = useLocation();

  return (
    <>
      <div role="tablist" className="flex flex-col bg-white p-6 rounded-xl gap-3 h-fit">
        {categories.map(category => (
          <NavLink 
            key={category.category} 
            to={`/category/${category.category}`}
            role="tab" 
            className={({ isActive }) => 
              `tab px-7 h-14 text-xl font-semibold rounded-full ${
            isActive || (category.category === "All Product" && location.pathname === "/")
            ? 'bg-[#9538E2] text-white'
            : 'bg-[#09080F0D] text-gray-500'
            }`
          }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories;