import { useParams } from 'react-router';
import TextProductDetail from './ProductDetail';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import '../assets/css/productdetail.css';
import { getProductDetail } from '../service/products';

function ProductDetailCMP() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getApi = async (id) => {
    try {
      const res = await getProductDetail(id);
      setProduct(res);
    } catch (error) {
      console.log(error);
      toast.error('Không thể gọi API');
    }
  };

  useEffect(() => {
    getApi(id);
  }, [id]);
  return (
    <>
      <section className="py-5 ">
        <div className="container" style={{ marginTop: 70, marginBottom: 40 }}>
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className=" mb-3 d-flex justify-content-center">
                <img className="image-product-detail" src={product.image} />
              </div>
            </aside>
            <main className="col-lg-6">
              <TextProductDetail product={product} />
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductDetailCMP;
