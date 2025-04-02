import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { toast } from "react-toastify";
import Product from "../components/Product.jsx";
import "../assets/css/product.css";
import { getProducts } from "../service/products.js";

function Shop() {
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
    <>
      <Banner
        title={"Sản phẩm"}
        des={
          "Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không gian sống của bạn thành nơi lý tưởng với giá cực tốt!"
        }
      />
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop;
