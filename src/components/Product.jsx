import { Link, useNavigate } from 'react-router';
import crossIcon from '../assets/images/cross.svg';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import formatCurrency from '../consts/formatCurrency';
import { addProductById } from '../slices/cartSlice';
import useAuthen from '../hooks/useAuthen.jsx';

function Product({ product }) {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('UserId');
  const isAuthen = useAuthen();
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (isAuthen) {
      const productItem = {
        userId,
        product: { ...product, quantity: 1 },
      };

      dispatch(addProductById(productItem));
      toast.success('Đã thêm vào giỏ hàng');
    } else {
      toast.warning('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!');
      navigate('/login');
    }
  };

  return (
    <div className="col-12 col-md-4 col-lg-3 mb-5">
      <Link className="product-item" to={`/product-detail/${product.id}`}>
        <img src={product.image} className="img-fluid product-thumbnail" />
        <h3 className="product-title">{product.name}</h3>
        <strong className="product-price">
          {formatCurrency(product.price)}
        </strong>
        <div>
          <span onClick={handleAddToCart} className="icon-cross">
            <img src={crossIcon} className="img-fluid" />
          </span>
        </div>
      </Link>
    </div>
  );
}
export default Product;
