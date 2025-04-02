import sofa from "../assets/images/sofa.png";
import envelope from "../assets/images/envelope-outline.svg";

function Footer() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="footer-section">
      <div className="container relative">
        <div className="sofa-img">
          <img src={sofa} alt="Hình ảnh" className="img-fluid" />
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h3 className="d-flex align-items-center">
                <span className="me-1">
                  <img src={envelope} alt="Hình ảnh" className="img-fluid" />
                </span>
                <span>Liên hệ với chúng tôi</span>
              </h3>
              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email của bạn"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nội dung góp ý"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <span className="fa fa-paper-plane" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                Homely<span>.</span>
              </a>
            </div>
            <p className="mb-4">
              Công ty nội thất Homely chuyên cung cấp sản phẩm nội thất hiện đại
              và tinh tế, từ bàn ghế đến phụ kiện trang trí. Với đội ngũ thiết
              kế chuyên nghiệp, chúng tôi cam kết mang đến không gian sống tiện
              nghi và phong cách cho mọi gia đình. Hãy để Homely giúp bạn tạo
              nên tổ ấm hoàn hảo!
            </p>
            <ul className="list-unstyled custom-social">
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => openLink('https://www.facebook.com/xengdayy/')}
                >
                  <span className="fa fa-brands fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => openLink('https://www.instagram.com/tungthuyfake/')}
                >
                  <span className="fa fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => openLink('https://www.behance.net/lenguyenxeng')}
                >
                  <span className="fa fa-brands fa-behance" />
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => openLink('https://github.com/LeNguyenXeng')}
                >
                  <span className="fa fa-brands fa-github" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Trang Chủ</a>
                  </li>
                  <li>
                    <a href="#">Giới Thiệu</a>
                  </li>
                  <li>
                    <a href="#">Liên Hệ</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Hỗ Trợ</a>
                  </li>
                  <li>
                    <a href="#">Sản Phẩm</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Giỏ Hàng</a>
                  </li>
                  <li>
                    <a href="#">Đăng Ký</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản &amp; Điều kiện</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Đăng Nhập</a>
                  </li>
                  <li>
                    <a href="#">Chi Tiết Sản Phẩm</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright © . Homely
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <a href="#">Điều khoản &amp; Điều kiện</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;