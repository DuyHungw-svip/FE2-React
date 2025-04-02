import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StartTestimonial from "../components/StartTestimonial";
import TeamAbout from "../components/TeamAbout";
import WhyChooseUs from "../components/WhyChooseUs";

function About() {
  return (
    <>
      <Banner
        title={"Giới thiệu"}
        des={
          "Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không gian sống của bạn thành nơi lý tưởng với giá cực tốt!"
        }
      />
      <WhyChooseUs />
      <TeamAbout />
      <StartTestimonial />
    </>
  );
}
export default About;
