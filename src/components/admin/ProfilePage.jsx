import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router";
import "../../assets/css/adminheader.css";
import $ from "jquery";
import ListProduct from "../../pages/admin/ListProduct";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import avt from "../../assets/images/avtprofile.png";

function ProfileAdminPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getList = async () => {
    console.log(id);

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/${id}`
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
      toast.success("Lỗi");
    }
  };
  useEffect(() => {
    if (id) {
      getList();
    }
  }, [id]);

  const handleOpenFB = () => {
    window.open("https://www.facebook.com/xengdayy");
  };
  const handleOpenBE = () => {
    window.open("https://www.behance.net/lenguyenxeng");
  };
  const handleOpenIG = () => {
    window.open("https://www.instagram.com/tungthuyfake");
  };
  const handleOpenGithub = () => {
    window.open("https://github.com/LeNguyenXeng");
  };

  const handleLogout = (id) => {
    try {
      axios.delete(`${import.meta.env.VITE_BASE_URL}/users/${id}`);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
      toast.success("Đăng xuất thành công");
      localStorage.clear("Token");
      localStorage.clear("UserId");
    } catch (error) {
      console.log(error);
      toast.error("Lỗi, không thể đăng xuất");
    }
  };

  const isAdmin = users.is_admin;

  useEffect(() => {
    const mobileScreen = window.matchMedia("(max-width: 990px)");

    const handleDropdownToggle = () => {
      $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this)
          .closest(".dashboard-nav-dropdown")
          .toggleClass("show")
          .find(".dashboard-nav-dropdown")
          .removeClass("show");
        $(this).parent().siblings().removeClass("show");
      });
    };

    const handleMenuToggle = () => {
      $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
          $(".dashboard-nav").toggleClass("mobile-show");
        } else {
          $(".dashboard").toggleClass("dashboard-compact");
        }
      });
    };

    handleDropdownToggle();
    handleMenuToggle();

    
    return () => {
      $(".dashboard-nav-dropdown-toggle").off("click");
      $(".menu-toggle").off("click");
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
                  <Link to={"/admin/home"} className="brand-logo">
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
                        {" "}
                        <i className="fa fa-inbox" />
                      </div>
                      <div className="text-header">Quản lý sản phẩm</div>
                    </a>
                    <div className="dashboard-nav-dropdown-menu">
                      <Link
                        to={"/admin/listproduct"}
                        className="dashboard-nav-dropdown-item"
                      >
                        Danh sách sản phẩm
                      </Link>
                      <Link
                        to={"/admin/addproduct"}
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
                      <div className="icon-header">
                        <i className="fa fa-users" />
                      </div>
                      <div className="text-header">Quản lý tài khoản</div>
                    </a>
                    <div className="dashboard-nav-dropdown-menu">
                      <Link
                       to={"/admin/listaccount"}
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
                    to={`/admin/profile/${users.id}`}
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
          <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <img
                        src={avt}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: 150, marginTop: 15 }}
                      />
                      <h5 className="fw-bolder my-3">{users?.name}</h5>

                      <div className="d-flex justify-content-center mb-2">
                      <button
  type="button"
  data-mdb-button-init
  data-mdb-ripple-init
  className="btn btn-primary"
  style={{ background: '#000', border: '#000', color: '#fff' }}
  onClick={handleLogout}
>
  Đăng xuất
</button>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4 mb-lg-0">
                    <div className="card-body p-0">
                      <ul className="list-group list-group-flush rounded-3">
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Họ tên</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{users?.name}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{users?.email}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Địa Chỉ</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{users?.address}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Số điện thoại</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{users?.phone}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Vai trò</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {isAdmin ? "Admin" : "Thành viên"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default ProfileAdminPage;
