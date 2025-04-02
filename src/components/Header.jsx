import userIcon from '../assets/images/user.svg';
import cartIcon from '../assets/images/cart.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.carts);
  const [totalItem, setTotalItem] = useState(cartItems?.length || 0);

  useEffect(() => {
    setTotalItem(cartItems?.length || 0);
  }, [cartItems]); // Khi cartItems thay đổi, cập nhật totalItem
  const token = localStorage.getItem('Token');
  const userId = localStorage.getItem('UserId');
  const handleClick = () => {
    token ? navigate(`/profile/${userId}`) : navigate('/login');
  };

  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Untree.co" />
        <link rel="shortcut icon" href="favicon.png" />
        <meta name="description" content="" />
        <meta name="keywords" content="bootstrap, bootstrap4" />
        <title>ASM 2</title>
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm"
          aria-label="Furni navigation bar"
        >
          <div className="container">
            <Link className="navbar-brand text-white" to="/">
             <span> Đồng hồ Rolex</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsFurni"
              aria-controls="navbarsFurni"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/">
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-white" to="/shop">
                    Sản Phẩm
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-white" to="/about">
                    Giới Thiệu
                  </Link>
                </li>
                <li>
                  <Link className="nav-link text-white" to="/contact">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav mb-2 mb-md-0 ms-5">
                <li>
                  <button onClick={handleClick} className="nav-link text-white">
                    <img src={userIcon} alt="User" />
                  </button>
                </li>
                <li>
                  <Link className="nav-link text-white" to={'/shopping-cart'}>
                    <img src={cartIcon} alt="Cart" />
                    {totalItem > 0 && (
                      <span
                        className="badge bg-danger rounded-circle position-absolute"
                        style={{ marginLeft: -12 }}
                      >
                        {totalItem}
                      </span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Thêm một ít CSS để tạo hiệu ứng cho các chữ */}
      <style>
        {`
          .nav-link {
            position: relative;
          }

          .nav-link:hover {
            color: #f8f9fa !important;
            text-decoration: none;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #fff;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }

          .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}
      </style>
    </>
  );
}

export default Header;
