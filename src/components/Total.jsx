import { useSelector, useDispatch } from 'react-redux';
import ProductCart from './ProductCart';
import formatCurrency from '../consts/formatCurrency';
import { useNavigate } from 'react-router';
import { clearCartByUserId } from '../slices/cartSlice';

function Total() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.carts);
  const userId = localStorage.getItem('UserId');
  const navigate = useNavigate();
  const totalPrice = () => {
    return cartItems.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.quantity * currentValue.price || 0);
    }, 0);
  };

  const handleDeleteCart = () => {
    dispatch(clearCartByUserId(userId));
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout', { state: { cartItems, totalPrice: totalPrice() } });
    } else {
      alert('Giỏ hàng của bạn đang trống!');
    }
  };

  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form
            className="col-md-12"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Hình ảnh</th>
                    <th className="product-name">Tên sản phẩm</th>
                    <th className="product-price">Giá sản phẩm</th>
                    <th className="product-quantity">Số lượng</th>
                    <th className="product-total">Thành tiền</th>
                    <th className="product-remove">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center' }}>
                        <span
                          style={{
                            fontSize: '15px',
                            color: 'red',
                            fontWeight: 500,
                          }}
                        >
                          Chưa có sản phẩm nào trong giỏ hàng
                        </span>
                      </td>
                    </tr>
                  ) : (
                    cartItems.map((item) => (
                      <ProductCart key={item.id} item={item} />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </form>
          <div style={{ textAlign: 'end' }}>
            <button
              className="btn btn-black btn-sm py-3 btn-block"
              style={{ background: '#dc3545', border: '#dc3545' }}
              onClick={handleDeleteCart}
              disabled={cartItems.length === 0}
            >
              Xóa giỏ hàng
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row justify-content-end">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3
                      className="text-black h4 text-uppercase"
                      style={{ fontWeight: 700 }}
                    >
                      Tổng giỏ hàng
                    </h3>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black" style={{ fontSize: 20 }}>
                      Tổng tiền:
                    </span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong style={{ fontSize: 20, color: 'rgb(210, 0, 0)' }}>
                      {formatCurrency(totalPrice())}
                    </strong>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <button
                      className="btn btn-black btn-lg py-3 btn-block"
                      onClick={handleCheckout}
                      disabled={cartItems.length === 0}
                    >
                      Thanh Toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
