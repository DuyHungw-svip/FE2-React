import { Link } from "react-router";
import imgGird1 from "../assets/images/img-grid-1.jpg";
import imgGird2 from "../assets/images/img-grid-2.jpg";
import imgGird3 from "../assets/images/img-grid-3.jpg";

function WeHelp() {
  return (
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img src={imgGird1} alt="Untree.co" />
              </div>
              <div className="grid grid-2">
                <img src={imgGird2} alt="Untree.co" />
              </div>
              <div className="grid grid-3">
                <img src={imgGird3} alt="Untree.co" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">
              Chúng tôi giúp bạn thiết kế nội thất hiện đại
            </h2>
            <p>
              Chúng tôi hỗ trợ bạn trong việc thiết kế nội thất hiện đại. Với
              đội ngũ sáng tạo và kinh nghiệm, chúng tôi cam kết mang đến những
              giải pháp tối ưu nhất cho không gian sống của bạn.
            </p>
            <ul className="list-unstyled custom-list my-4">
              <li>Thiết kế nội thất hiện đại.</li>
              <li>Tối ưu hóa không gian.</li>
              <li>Đáp ứng nhu cầu cá nhân.</li>
              <li>Tạo cảm hứng sáng tạo.</li>
            </ul>
            <p>
              <Link to={"/shop"} className="btn">
                Xem thêm
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeHelp;
