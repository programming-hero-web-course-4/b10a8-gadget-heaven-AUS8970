import ProductsData from '../../public/products.json';
import Product from './Product';

const Products = ({category}) => {
  function getProducts(){
    if(category === "all"){
      return ProductsData;
    } else {
      return ProductsData.filter(
        (product) => product.category === category
      );
    }
  }
  const products = getProducts();

  return (
    <div>
      <div className="">
        {
          products.map((product) => {
            <Product product={product} key={product.product_id}></Product>
          })
        }
      </div>
    </div>
  );
};

export default Products;