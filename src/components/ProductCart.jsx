import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import formatCurrency from '../consts/formatCurrency';
import { useNavigate } from 'react-router';
import { editProductById, removeProductById } from '../slices/cartSlice';

function ProductCart({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const userId = localStorage.getItem('UserId');
  const navigate = useNavigate();
  const quantityBeforeChange = useRef(quantity); // Lưu trữ số lượng trước khi thay đổi

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const increaseQuantity = () => {
    const productItem = {
      userId,
      product: { ...item, quantity: 1 },
    };

    dispatch(editProductById(productItem)); // ✅ Sử dụng editProductById
    setQuantity(quantity + 1);
  };

  const reduceQuantity = () => {
    const productItem = {
      userId,
      product: { ...item, quantity: -1 },
    };

    if (quantity > 1) {
      // Đảm bảo quantity > 1 trước khi giảm
      dispatch(editProductById(productItem)); // ✅ Sử dụng editProductById
      setQuantity(quantity - 1);
    } else if (quantity === 1) {
      handleShow(); // Hiển thị modal xác nhận xóa khi quantity = 1
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setQuantity(inputValue);
  };

  const handleBlur = () => {
    const newQuantity = Number(quantity); // Lấy giá trị từ state
    if (isNaN(newQuantity) || newQuantity === 0) {
      setShow(true);
      quantityBeforeChange.current = quantityBeforeChange.current;
      setQuantity(quantityBeforeChange.current);
    } else {
      // Nếu có số -> Dispatch
      const productItem = {
        userId,
        product: { ...item, quantity: newQuantity },
        replaceQuantity: true,
      };
      quantityBeforeChange.current = newQuantity;
      dispatch(editProductById(productItem));
    }
  };

  const handleCancelDelete = () => {
    handleClose();
    setQuantity(quantityBeforeChange.current); // Khôi phục lại giá trị trước đó
  };

  const handleDelete = (productId) => {
    dispatch(removeProductById({ userId, productId }));
    handleClose();
  };

  const handleNavigateToDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    const total = item.quantity * item.price;
    setTotal(total);
  }, [item]);

  return (
    <>
      <tr key={item.id}>
        <td
          style={{ cursor: 'pointer' }}
          onClick={() => handleNavigateToDetail(item.id)}
          className="product-thumbnail"
        >
          <img src={item.image} alt="Image" className="img-fluid" />
        </td>
        <td
          style={{ cursor: 'pointer' }}
          onClick={() => handleNavigateToDetail(item.id)}
          className="product-name"
        >
          <h2 className="h5 text-black">{item.name}</h2>
        </td>
        <td>{formatCurrency(item.price)}</td>
        <td>
          <div
            className="input-group mb-3 d-flex align-items-center quantity-container"
            style={{ maxWidth: 120 }}
          >
            <div className="input-group-prepend">
              <button
                onClick={reduceQuantity}
                className="btn btn-outline-black decrease"
                type="button"
              >
                −
              </button>
            </div>
            <input
              type="number"
              min={0}
              className="form-control text-center quantity-amount"
              value={quantity}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="input-group-append">
              <button
                onClick={increaseQuantity}
                className="btn btn-outline-black increase"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </td>
        <td>{formatCurrency(total)}</td>
        <td>
          <button
            onClick={() => handleDelete(item.id)}
            className="btn btn-black btn-sm"
          >
            X
          </button>
        </td>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa sản phẩm?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc chắn muốn xóa sản phẩm này?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancelDelete}>
              Không
            </Button>
            <Button
              variant="danger"
              style={{ background: '#dc3545', border: '#dc3545' }}
              onClick={() => handleDelete(item?.id)}
            >
              Đồng ý
            </Button>
          </Modal.Footer>
        </Modal>
      </tr>
    </>
  );
}
export default ProductCart;
