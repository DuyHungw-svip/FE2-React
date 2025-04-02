import { useEffect } from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Total from '../components/Total';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartById } from '../slices/cartSlice';

function ShoppingCart() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('UserId');
  useEffect(() => {
    dispatch(fetchCartById(userId));
  }, []);
  return (
    <div>
      <Banner
        title={'Giỏ hàng'}
        des={
          'Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không gian sống của bạn thành nơi lý tưởng với giá cực tốt!'
        }
      />
      <Total />
    </div>
  );
}
export default ShoppingCart;
