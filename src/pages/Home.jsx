import Banner from '../components/Banner';
import Header from '../components/Header';
import '../assets/css/bootstrap.min.css';
import '../assets/css/tiny-slider.css';
import '../assets/css/style.css';
import ProductSection from '../components/ProductSection';
import WhyChooseUs from '../components/WhyChooseUs';
import WeHelp from '../components/WeHelp';
import StartTestimonial from '../components/StartTestimonial';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { fetchCartById } from '../slices/cartSlice';
import { useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('UserId');
  useEffect(() => {
    dispatch(fetchCartById(userId));
  }, []);
  return (
    <div>
      <Banner
        title={'Săn ngay ưu đãi'}
        title2={'Ghế đẹp giá tốt!'}
        des={
          'Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không gian sống của bạn thành nơi lý tưởng với giá cực tốt!'
        }
        isShowBtn
      />
      <ProductSection />
      <WhyChooseUs />
      <WeHelp />
      <StartTestimonial />
      <Blog />
    </div>
  );
}
export default Home;
