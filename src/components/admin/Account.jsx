import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router';
import '../../assets/css/adminheader.css';
import '../../assets/css/admincontent.css';
import $ from 'jquery';
import ListProduct from '../../pages/admin/ListProduct';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function AccountPage() {
  const [users, setUsers] = useState([]);
  console.log(users);

  const getListUser = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users`
      );
      setUsers(data);
    } catch (error) {
      console.error(
        'API call failed:',
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      if (confirm('Bạn có muốn xóa không?')) {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`);
        toast.success('Xóa thành công');
        getListUser();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListUser();
  }, []);

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
            <a href="#" className="dashboard-nav-item">
              <div className="icon-header">
                <i className="fa fa-tachometer"></i>
              </div>
              <div className="text-header">Dashboard</div>
            </a>
            <div className="dashboard-nav-dropdown">
              <a
                href="#!"
                className="dashboard-nav-dropdown-toggle dashboard-nav-item"
              >
                <div className="icon-header">
                  {' '}
                  <i className="fa fa-inbox" />
                </div>
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
             
              <div className="dashboard-nav-dropdown-menu">
                <Link
                  to={'/admin/listaccount'}
                  className="dashboard-nav-dropdown-item"
                >
                  Danh sách tài khoản
                </Link>
              </div>
            </div>
            <a href="#" className="dashboard-nav-item">
              <div className="icon-header">
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="text-header">Quản lý đơn hàng</div>
            </a>
            <Link
              to={`/admin/profile/${userId}`}
              className="dashboard-nav-item"
            >
              <div className="icon-header">
                <i className="fa fa-address-card-o" />
              </div>
              <div className="text-header">Thông Tin</div>
            </Link>
            <div className="nav-item-divider" />
            <a onClick={handleLogout} className="dashboard-nav-item">
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
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6
                  className="m-0 font-weight-bold"
                  style={{ fontWeight: 700 }}
                >
                  DANH SÁCH SẢN PHẨM
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Tên tài khoản</th>
                        <th>Email</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Quyền hạn</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.address}</td>
                          <td>{item.phone}</td>
                          <td
                            className={
                              item.is_admin ? 'text-danger' : 'text-success'
                            }
                          >
                            {item.is_admin ? 'Admin' : 'Member'}
                          </td>

                          <td>
                            <div style={{ display: 'flex', gap: 5 }}>
                              <Link
                                to={`/admin/updateaccount/${item.id}`}
                                className="button-circle-edit"
                              >
                                <div className="icon-circle-edit">
                                  <i className="fa fa-wrench" />
                                </div>
                              </Link>
                              <Link
                                onClick={() => handleDelete(item.id)}
                                className="button-circle-delete"
                              >
                                <div className="icon-circle-edit">
                                  <i className="fa fa-trash" />
                                </div>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default AccountPage;
