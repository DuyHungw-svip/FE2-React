function Footer() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="footer-section bg-dark text-white py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 mb-4">
            <div className="footer-logo-wrap">
              <a href="#" className="footer-logo text-white">
                <span>Đồng hồ Rolex</span>
              </a>
            </div>
            <p className="text-white">
              Công ty nội thất Homely chuyên cung cấp sản phẩm nội thất hiện đại
              và tinh tế, từ bàn ghế đến phụ kiện trang trí. Với đội ngũ thiết
              kế chuyên nghiệp, chúng tôi cam kết mang đến không gian sống tiện
              nghi và phong cách cho mọi gia đình. Hãy để Homely giúp bạn tạo
              nên tổ ấm hoàn hảo!
            </p>
            
          </div>

          <div className="col-lg-8">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">Trang Chủ</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Giới Thiệu</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Liên Hệ</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">Hỗ Trợ</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Sản Phẩm</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">Giỏ Hàng</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Đăng Ký</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Điều khoản &amp; Điều kiện</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">Đăng Nhập</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">Chi Tiết Sản Phẩm</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top pt-4">
          <div className="row">
            <div className="col-lg-6">
              <p className="text-center text-lg-start mb-2">
                Đồng hồ Rolex &copy; {new Date().getFullYear()} | Bản quyền thuộc về
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4">
                  <a href="#" className="text-white">Điều khoản &amp; Điều kiện</a>
                </li>
                <li>
                  <a href="#" className="text-white">Chính sách bảo mật</a>
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
