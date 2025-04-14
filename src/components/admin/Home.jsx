import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Đăng ký các component cần thiết cho biểu đồ
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

function HomePage() {
  const [tongSoDonHang, setTongSoDonHang] = useState(0);
  const [tongTien, setTongTien] = useState(0);
  const [tongSanPham, setTongSanPham] = useState(0);
  const [donHangTheoTrangThai, setDonHangTheoTrangThai] = useState({
    'Giao hàng thành công': 0,
    'Chờ xác nhận': 0,
    'Đã xác nhận': 0,
    'Chờ lấy hàng': 0,
    'Đang giao hàng': 0,
    'Đã hủy': 0,
    'Trả hàng': 0,
  });

  // Phần mã trong useEffect
  useEffect(() => {
    // Lấy dữ liệu đơn hàng
    axios
      .get('http://localhost:3000/orders')
      .then((response) => {
        const data = response.data;
        console.log('Dữ liệu đơn hàng:', data); // Debug

        // Đếm số lượng đơn hàng theo trạng thái
        const statusCount = {
          'Giao hàng thành công': 0,
          'Chờ xác nhận': 0,
          'Đã hủy': 0,
          'Chờ lấy hàng': 0,
          'Đang giao hàng': 0,
          'Đã xác nhận': 0,
          'Trả hàng': 0,
        };

        // Tính tổng tiền cho đơn hàng giao thành công
        let totalAmount = 0;

        data.forEach((order) => {
          if (order.status && statusCount.hasOwnProperty(order.status)) {
            statusCount[order.status] += 1;
            if (order.status === 'Giao hàng thành công') {
              totalAmount += parseInt(order.totalPrice, 10); // Chuyển đổi totalPrice thành số nguyên và cộng dồn
            }
          } else {
            console.warn(`Trạng thái không hợp lệ: ${order.status}`);
          }
        });

        // Cập nhật trạng thái đơn hàng và tổng tiền
        setDonHangTheoTrangThai(statusCount);
        setTongTien(totalAmount); // Cập nhật tổng tiền
      })
      .catch((error) => {
        console.error('Lỗi khi lấy đơn hàng:', error);
      });
  }, []);

  useEffect(() => {
    // Lấy dữ liệu sản phẩm
    axios
      .get('http://localhost:3000/products')
      .then((response) => {
        setTongSanPham(response.data.length);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy sản phẩm:', error);
      });

    // Lấy tài khoản
    axios
      .get('http://localhost:3000/users') // Điều chỉnh URL nếu cần
      .then((response) => {
        setTongTaiKhoan(response.data.length);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy tài khoản:', error);
      });
  }, []);

  // Định nghĩa dữ liệu cho biểu đồ
  const chartData = {
    labels: [
      'Chờ xác nhận',
      'Đã xác nhận',
      'Chờ lấy hàng',
      'Đang giao hàng',
      'Giao hàng thành công',
      'Đã hủy',
      'Trả hàng',
    ],
    datasets: [
      {
        label: 'Số lượng đơn hàng',
        data: [
          donHangTheoTrangThai['Chờ xác nhận'],
          donHangTheoTrangThai['Đã xác nhận'],
          donHangTheoTrangThai['Chờ lấy hàng'],
          donHangTheoTrangThai['Đang giao hàng'],
          donHangTheoTrangThai['Giao hàng thành công'],
          donHangTheoTrangThai['Đã hủy'],
          donHangTheoTrangThai['Trả hàng'],
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)', // Chờ xác nhận
          'rgba(255, 159, 64, 0.7)', // Đã xác nhận
          'rgba(255, 99, 132, 0.7)', // Chờ lấy hàng
          'rgba(75, 192, 192, 0.7)', // Đang giao hàng
          'rgba(102, 255, 127, 0.7)', // Giao hàng thành công
          'rgba(255, 252, 86, 0.7)', // Đã hủy
          'rgba(255, 99, 71, 0.7)', // Trả hàng
        ],
      },
    ],
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  };

  const cardStyle = {
    background: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
    width: '23%',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h4>Tổng Số Đơn Hàng</h4>
          <p style={{ fontSize: 18 }}>
            {donHangTheoTrangThai['Giao hàng thành công']} Đơn
          </p>
        </div>
        <div style={cardStyle}>
          <h4>Tổng Tiền Đơn Hàng</h4>
          <p style={{ fontSize: 18 }}>{tongTien.toLocaleString()}₫</p>
        </div>
        <div style={cardStyle}>
          <h4>Tổng sản phẩm</h4>
          <p style={{ fontSize: 18 }}>{tongSanPham} Sản Phẩm</p>
        </div>
       
      </div>

      {/* Hiển thị biểu đồ trạng thái đơn hàng */}
      <div style={{ margin: '20px' }}>
        <h3 style={{ textAlign: 'center' }}>Thống kê </h3>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
              title: {
                display: true,
                text: 'Biểu đồ thống kê trạng thái đơn hàng',
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
