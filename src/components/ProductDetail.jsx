import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import formatCurrency from '../consts/formatCurrency.js';
import useAuthen from '../hooks/useAuthen.jsx';
import { addProductById } from '../slices/cartSlice.js';

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const userId = localStorage.getItem('UserId');
  const isAuthen = useAuthen();
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (!isAuthen) {
      toast.warning('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!');
      navigate('/login');
      return;
    }

    const productItem = {
      userId,
      product: { ...product, quantity: Number(quantity) },
    };

    dispatch(addProductById(productItem));
    toast.success('Đã thêm vào giỏ hàng');
  };

  return (
    <div className="ps-lg-3">
      <h4 className="title text-dark" style={{ fontSize: 24 }}>
        {product.name}
      </h4>
      <div className="mb-3">
        <span className="h6">{formatCurrency(product.price)}</span>
      </div>
      <p style={{ fontSize: 15 }}>{product.description}</p>
      <div className="mb-4">
        <label htmlFor="quantity" className="form-label">
          Số lượng:
        </label>
        <input
          type="number"
          min={1}
          value={quantity}
          className="form-control"
          style={{ width: 80 }}
          onChange={handleOnChange}
        />
      </div>

      <hr />
      <button
        onClick={handleAddToCart}
        className="btn btn-primary shadow-0"
        disabled={quantity <= 0}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}

export default ProductDetail;
