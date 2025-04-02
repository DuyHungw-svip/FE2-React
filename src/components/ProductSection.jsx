import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Product from "./Product";
import { getProducts } from "../service/products";

function ProductSection() {
  const [products, setProducts] = useState([]);

  const getList = async () => {
    try {
      const res = await getProducts();
      setProducts(res);
    } catch (error) {
      console.log(error);
      toast.success("Lỗi");
    }
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
         

          {products.slice(0,4).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductSection;
