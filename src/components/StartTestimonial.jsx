import React, { useEffect } from "react";
import { tns } from "tiny-slider";
import person1 from "../assets/images/person-1.jpg";
import person2 from "../assets/images/person_4.jpg";
import person3 from "../assets/images/person-5.png.jpg";

function StartTestimonial() {
  const customerPerception = [
    {
      id: 1,
      content: ` “Chúng tôi rất hài lòng với dịch vụ mà Homely cung cấp. Đội ngũ của họ luôn chuyên nghiệp và tận tâm, giúp chúng tôi giải quyết nhanh chóng các vấn đề phát sinh. Họ không chỉ lắng nghe nhu cầu của chúng tôi mà còn đưa ra những giải pháp sáng tạo và hiệu quả. Chất lượng sản phẩm luôn đạt tiêu chuẩn cao, và sự hỗ trợ nhiệt tình trong suốt quá trình hợp tác đã giúp chúng tôi tiết kiệm thời gian và công sức. Chắc chắn chúng tôi sẽ tiếp tục hợp tác với Homely trong các dự án tương lai!.”`,
      image: person1,
      name: "X$ng",
      job: "CEO, Founder Paraoh",
    },
    {
      id: 2,
      content: ` “Chúng tôi rất ấn tượng với sự chuyên nghiệp và chất
                            lượng dịch vụ mà Homely mang lại. Đội ngũ ở đây
                            không chỉ am hiểu về lĩnh vực của mình mà còn luôn
                            sẵn sàng hỗ trợ và tư vấn tận tình. Nhờ có sự hợp
                            tác chặt chẽ, chúng tôi đã thực hiện được nhiều dự
                            án thành công và đạt được mục tiêu mong muốn. Sự
                            sáng tạo và đổi mới trong từng giải pháp của Homely
                            đã giúp chúng tôi cải thiện hiệu suất làm việc và
                            nâng cao trải nghiệm của khách hàng. Chúng tôi rất
                            mong chờ vào những dự án tiếp theo cùng Homely!”`,
      image: person2,
      name: "Vũ Duy Hưng",
      job: "Founder $hark Store",
    },
    {
      id: 3,
      content: ` “Homely đã để lại ấn tượng mạnh mẽ với chúng tôi nhờ phong cách làm việc chuyên nghiệp và chất lượng dịch vụ xuất sắc. Đội ngũ tại đây luôn thể hiện sự tận tâm, am hiểu sâu sắc về lĩnh vực và không ngừng hỗ trợ chúng tôi trong suốt quá trình hợp tác. Nhờ vào sự đồng hành chặt chẽ này, chúng tôi đã đạt được những kết quả đáng tự hào và hoàn thành nhiều dự án quan trọng. Các giải pháp sáng tạo và linh hoạt của Homely thực sự giúp chúng tôi tối ưu hóa quy trình làm việc và mang lại trải nghiệm tốt hơn cho khách hàng. Chúng tôi rất tin tưởng và kỳ vọng vào những cơ hội hợp tác tiếp theo cùng Homely!”`,
      image: person3,
      name: "Viên Thị Thùy Linh",
      job: "CEO VTL",
    },
  ];

  useEffect(() => {
    tns({
      container: ".testimonial-slider",
      items: 1,
      axis: "horizontal",
      controlsContainer: "#testimonial-nav",
      swipeAngle: false,
      speed: 700,
      nav: true,
      controls: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3500,
      autoplayButtonOutput: false,
    });
  }, []);

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Cảm nhận của khách hàng</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              <div id="testimonial-nav">
                <span className="prev" data-controls="prev">
                  <span className="fa fa-chevron-left" />
                </span>
                <span className="next" data-controls="next">
                  <span className="fa fa-chevron-right" />
                </span>
              </div>
              <div className="testimonial-slider">
                {customerPerception.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>{item.content} </p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={item.image}
                                alt="X$ng"
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">{item.name}</h3>
                            <span className="position d-block mb-3">
                              {item.job}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartTestimonial;
