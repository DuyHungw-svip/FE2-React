import Banner from '../components/Banner';
import Header from '../components/Header';
import '../assets/css/bootstrap.min.css';
import '../assets/css/tiny-slider.css';
import '../assets/css/style.css';
import ProductSection from '../components/ProductSection';
import WhyChooseUs from '../components/WhyChooseUs';
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
        des={
          'Khám phá bộ sưu tập đồng hồ sang trọng của chúng tôi !'
        }
        isShowBtn
      />
      <ProductSection />
      <WhyChooseUs />
      
      
    </div>
  );
}
export default Home;
