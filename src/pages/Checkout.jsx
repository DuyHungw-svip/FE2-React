import React from 'react';
import '../assets/css/checkout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faDollarSign, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Thêm các icon cần thiết
import { Link, useLocation, useNavigate } from 'react-router-dom';
import formatCurrency from '../consts/formatCurrency';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { clearCartByUserId } from '../slices/cartSlice';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = localStorage.getItem('UserId');

  const { cartItems, totalPrice } = location.state || {
    cartItems: [],
    totalPrice: 0,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    if (!userId) {
      toast.error('Lỗi: Không tìm thấy UserId. Vui lòng đăng nhập lại!');
      return;
    }

    const orderData = {
      userId,
      customer: data,
      items: cartItems,
      totalPrice,
      status: 'Đang xử lý',
    };

    try {
      await axios.post('http://localhost:3000/orders', orderData);
      dispatch(clearCartByUserId(userId));
      toast.success('Đặt hàng thành công');
      navigate('/shop', { replace: true });
    } catch (error) {
      console.error('Lỗi đặt hàng:', error);
      toast.error('Đã xảy ra lỗi, vui lòng thử lại!');
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Form nhập thông tin */}
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="font-size-16 mb-4">Thông Tin Thanh Toán</h5>
                <div className="feed-item-list">
                  {/* Thông tin người dùng */}
                  <div className="mb-4">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      Họ tên:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập họ tên"
                      {...register('name', {
                        required: 'Vui lòng nhập họ tên',
                      })}
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Nhập email"
                      {...register('email', {
                        required: 'Vui lòng nhập email',
                      })}
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faPhone} className="me-2" />
                      Số điện thoại:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Nhập số điện thoại"
                      {...register('phone', {
                        required: 'Vui lòng nhập số điện thoại',
                        minLength: {
                          value: 10,
                          message: 'Số điện thoại phải có 10 kí tự',
                        },
                        maxLength: {
                          value: 10,
                          message:
                            'Số điện thoại không được quá 10 kí tự',
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-danger">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Địa chỉ */}
                  <div className="mb-4">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                      Địa chỉ:
                    </label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Nhập địa chỉ "
                      {...register('address', {
                        required: 'Vui lòng nhập địa chỉ',
                        minLength: {
                          value: 10,
                          message: 'Địa chỉ phải có ít nhất 10 ký tự',
                        },
                        pattern: {
                          value:
                            /^(Số nhà\s[0-9]+(?:\/[0-9]+)?,\sPhố\s[\p{L}\s]+,\sPhường\s[\p{L}\s]+,\sQuận\s[\p{L}\s]+,\s[\p{L}\s]+)$/u,
                          message:
                            'Địa chỉ không hợp lệ. Vui lòng nhập theo định dạng: Số nhà , Phố , Phường, Quận , Thanh Pho',
                        },
                      })}
                    />
                    {errors.address && (
                      <p className="text-danger">{errors.address.message}</p>
                    )}
                  </div>

                  {/* Phương thức thanh toán */}
                  <div className="mb-4">
                    <label className="form-label">
                      <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                      Phương thức thanh toán:
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="cod"
                        id="payment_cod"
                        {...register('paymentMethod', {
                          required: 'Vui lòng chọn phương thức thanh toán',
                        })}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="payment_cod"
                      >
                        Thanh Toán Khi Nhận Hàng
                      </label>
                    </div>
                    {errors.paymentMethod && (
                      <p className="text-danger">{errors.paymentMethod.message}</p>
                    )}
                  </div>

                  {/* Nút submit */}
                  <div className="text-end mt-3">
                  <button
  type="submit"
  className="btn btn-primary"
  style={{ backgroundColor: 'black', border: 'none', color: 'white' }}
>
  <FontAwesomeIcon icon={faDollarSign} className="me-2" />
  Thanh Toán
</button>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="col-xl-4">
          <div className="card checkout-order-summary">
            <div className="card-body">
              <h5 className="font-size-16 mb-3">Tổng Tiền</h5>
              <div className="p-3 bg-light mb-3">
                <h5 className="font-size-16 mb-0">
                  Tổng tiền:
                  <span
                    className="float-end ms-2 text-danger"
                    style={{ fontWeight: 700 }}
                  >
                    {formatCurrency(totalPrice)}
                  </span>
                </h5>
              </div>

              <div className="table-responsive">
                <table className="table table-centered mb-0 table-nowrap">
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <Link
                            to={`/product-detail/${item.id}`}
                            className="text-dark"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="avatar-lg rounded"
                            />
                          </Link>
                        </td>
                        <td>
                          <h5 className="font-size-16">
                            <Link
                              to={`/product-detail/${item.id}`}
                              className="text-dark"
                            >
                              {item.name}
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">
                            {formatCurrency(item.price)} x {item.quantity}
                          </p>
                        </td>
                        <td style={{ fontWeight: 600 }}>
                          {formatCurrency(item.price)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
