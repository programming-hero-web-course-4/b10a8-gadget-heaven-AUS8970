import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map(category => (
        <Link 
          key={category.category} 
          to={`/category/${category.category}`}
          role="tab" 
          className="tab"
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories;