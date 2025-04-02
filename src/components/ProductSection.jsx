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
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h2 className="mb-4 section-title">Khám phá tất cả sản phẩm</h2>
            <p className="mb-4">
              Nhấn vào đây để tìm hiểu thêm về những chiếc ghế tuyệt đẹp, được
              thiết kế tinh tế với chất lượng hàng đầu!
            </p>
            <p>
              <Link to={"/shop"} className="btn">
                Khám phá
              </Link>
            </p>
          </div>

          {products.slice(0, 3).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductSection;
