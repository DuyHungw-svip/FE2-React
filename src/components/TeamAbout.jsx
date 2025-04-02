import person1 from "../assets/images/person_2.jpg";
import person2 from "../assets/images/person_3.jpg";
import person5 from "../assets/images/person-5.png.jpg";

function TeamAbout() {
  const openFBNT = () => {
    window.open("https://www.facebook.com/xengdayy/");
  };
  const openFBVD = () => {
    window.open("https://www.facebook.com/profile.php?id=100070288216587");
  };
  const openFBTL = () => {
    window.open("https://www.facebook.com/profile.php?id=100081308084785");
  };
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Đội ngũ phát triển</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 text-center">
            <img src={person1} className="img-fluid mb-5" />
            <h3>
              <a onClick={openFBNT} style={{ textDecoration: "none" }} href="#">
                Lê Nguyên Tùng
              </a>
            </h3>
            <span className="d-block position mb-4">
              <span className="fa-solid fa-location-dot" /> Thanh Hóa
            </span>
            <p>
              Tôi cũng đã thiết kế giao diện cho ứng dụng, chăm chút từng chi
              tiết để đảm bảo tính thân thiện và dễ sử dụng. Tôi đã dành nhiều
              thời gian để thử nghiệm và điều chỉnh giao diện sao cho phù hợp
              nhất với người dùng.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 text-center">
            <img src={person2} className="img-fluid mb-5" />
            <h3>
              <a onClick={openFBVD} style={{ textDecoration: "none" }} href="#">
                Vũ Duy Hưng
              </a>
            </h3>
            <span className="d-block position mb-4">
              <span className="fa-solid fa-location-dot" /> Hải Phòng
            </span>
            <p>
              Trong giai đoạn lập trình, tôi đã viết mã cho các chức năng chính,
              đối mặt với những thách thức kỹ thuật và tìm cách khắc phục các
              lỗi phát sinh. Việc kiểm thử ứng dụng cũng do tôi thực hiện, giúp
              tôi hiểu rõ hơn về tầm quan trọng của chất lượng sản phẩm.
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 text-center">
            <img src={person5} className="img-fluid mb-5" />
            <h3>
              <a onClick={openFBTL} style={{ textDecoration: "none" }} href="#">
                Viên Thị Thùy Linh
              </a>
            </h3>
            <span className="d-block position mb-4">
              <span className="fa-solid fa-location-dot" /> Hòa Bình
            </span>
            <p>
              Trong quá trình phát triển dự án, tôi đã chịu trách nhiệm xây dựng
              các tính năng cốt lõi, đối mặt với nhiều thách thức kỹ thuật và
              tìm ra giải pháp khắc phục các vấn đề phát sinh. Bên cạnh đó, tôi
              cũng thực hiện việc kiểm thử ứng dụng nhằm đảm bảo chất lượng sản
              phẩm, đồng thời rút ra được nhiều kinh nghiệm thực tiễn trong quy
              trình phát triển phần mềm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeamAbout;
