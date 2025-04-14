import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router';
import '../assets/css/adminheader.css';
import '../assets/css/admincontent.css';
import $ from 'jquery';
import { toast } from 'react-toastify';
import axios from 'axios';

function AdminLayout() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const id = localStorage.getItem('UserId');
    setUserId(id);
  }, []);
  const handleLogout = (id) => {
    try {
      axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
      toast.success('Đăng xuất thành công');
      localStorage.clear('Token');
      localStorage.clear('UserId');
    } catch (error) {
      console.log(error);
      toast.error('Lỗi, không thể đăng xuất');
    }
  };
  useEffect(() => {
    const mobileScreen = window.matchMedia('(max-width: 990px)');

    const handleDropdownToggle = () => {
      $('.dashboard-nav-dropdown-toggle').click(function () {
        $(this)
          .closest('.dashboard-nav-dropdown')
          .toggleClass('show')
          .find('.dashboard-nav-dropdown')
          .removeClass('show');
        $(this).parent().siblings().removeClass('show');
      });
    };

    const handleMenuToggle = () => {
      $('.menu-toggle').click(function () {
        if (mobileScreen.matches) {
          $('.dashboard-nav').toggleClass('mobile-show');
        } else {
          $('.dashboard').toggleClass('dashboard-compact');
        }
      });
    };

    handleDropdownToggle();
    handleMenuToggle();

    // Clean up the event listeners when the component unmounts
    return () => {
      $('.dashboard-nav-dropdown-toggle').off('click');
      $('.menu-toggle').off('click');
    };
  }, []);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-nav">
          <header>
            <a href="#!" className="menu-toggle">
              <i className="fa fa-align-left" />
            </a>
            <Link to={'/admin/home'} className="brand-logo">
              <div className="header-icon-nav">
               
              </div>
              <span>Đồng Hồ Rolex</span>
            </Link>
          </header>
          <nav className="dashboard-nav-list">
            <Link to={'/admin/home'} className="dashboard-nav-item">
             
              <div className="text-header">Dashboard</div>
            </Link>
            <div className="dashboard-nav-dropdown">
              <a
                href="#!"
                className="dashboard-nav-dropdown-toggle dashboard-nav-item"
              >
               
                <div className="text-header">Quản lý sản phẩm</div>
              </a>
              <div className="dashboard-nav-dropdown-menu">
                <Link
                  to={'/admin/listproduct'}
                  className="dashboard-nav-dropdown-item"
                >
                  Danh sách sản phẩm
                </Link>
                <Link
                  to={'/admin/addproduct'}
                  className="dashboard-nav-dropdown-item"
                >
                  Thêm sản phẩm
                </Link>
              </div>
            </div>
            <div className="dashboard-nav-dropdown">
              <a
                href="#!"
                className="dashboard-nav-dropdown-toggle dashboard-nav-item"
              >
                
                <div className="text-header">Quản lý tài khoản</div>
              </a>
              <div className="dashboard-nav-dropdown-menu">
                <Link
                  to={'/admin/listaccount'}
                  className="dashboard-nav-dropdown-item"
                >
                  Danh sách tài khoản
                </Link>
              </div>
            </div>
            <Link to={'/admin/listorder'} className="dashboard-nav-item">
             
               
             
              <div className="text-header">Quản lý đơn hàng</div>
            </Link>
            <Link
              to={`/admin/profile/${userId}`}
              className="dashboard-nav-item"
            >
              
              <div className="text-header">Profile</div>
            </Link>
            <div className="nav-item-divider" />
            <a
              onClick={handleLogout}
              style={{ cursor: 'pointer' }}
              className="dashboard-nav-item"
            >
              <div className="icon-header">
                <i className="fa fa-sign-out" />
              </div>
              <div className="text-header">Đăng xuất</div>
            </a>
          </nav>
        </div>
        <div className="dashboard-app">
          <header className="dashboard-toolbar">
            <a href="#!" className="menu-toggle">
              <i className="fa fa-bars" />
            </a>
          </header>
          <div className="container-fluid mt-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
