import support from "../assets/images/support.svg";
import truck from "../assets/images/truck.svg";
import bag from "../assets/images/bag.svg";
import returnIcon from "../assets/images/return.svg";
import WhyChooseUsImg from "../assets/images/why-choose-us-img.jpg";

function WhyChooseUs() {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Tại sao bạn chọn chúng tôi</h2>
            <p>
              Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng với
              đội ngũ chuyên nghiệp và dịch vụ tận tâm. Hãy để chúng tôi đồng
              hành cùng bạn!
            </p>
            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={truck} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Giao hàng miễn phí</h3>
                  <p>Với đơn hàng từ 2 triệu trở lên</p>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={bag} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Đặt hàng trực tuyến</h3>
                  <p>Hotline: 0396 180 619</p>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={support} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Hỗ trợ 24/7</h3>
                  <p>Hỗ trợ online / offline 24/7</p>
                </div>
              </div>
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={returnIcon} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Miễn phí đổi trả</h3>
                  <p>Trong vòng 7 ngày</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="img-wrap">
              <img src={WhyChooseUsImg} alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyChooseUs;
