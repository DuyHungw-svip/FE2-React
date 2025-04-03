import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate, useParams } from "react-router";
import "../../assets/css/adminheader.css";
import $ from "jquery";
import ListProduct from "../../pages/admin/ListProduct";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";

function UpdateProductPage() {
  const { id } = useParams();

  const getList = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/${id}`
      );
      reset(data);
    } catch (error) {
      console.log(error);
      toast.error("Lỗi");
    }
  };

  useEffect(() => {
    getList(id);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addProduct = async (data) => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/products/${id}`, data);
      setTimeout(() => {
        navigate("/admin/listproduct");
      }, 500);
      toast.success("Cập nhật thành công");
    } catch (error) {
      console.log(error);
      toast.error("Không thể cập nhật");
    }
  };

  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const id = localStorage.getItem("UserId");
    setUserId(id);
  }, []);
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

    // Clean up the event listeners when the component unmounts
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
                <i className="fa fa-user-secret" />
              </div>
              <span>Homely Admin</span>
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
              to={`/admin/profile/${userId}`}
              className="dashboard-nav-item"
            >
              <div className="icon-header">
                <i className="fa fa-address-card-o" />
              </div>
              <div className="text-header">Profile</div>
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
                  CẬP NHẬT SẢN PHẨM
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <form onSubmit={handleSubmit(addProduct)}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Tên Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="productName"
                        aria-describedby="nameHelp"
                        {...register("name", {
                          required: "Không được bỏ trống",
                        })}
                      />
                      {errors?.name && (
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Giá Sản Phẩm
                      </label>
                      <input
                        type="number"
                        min={0}
                        className="form-control"
                        id="productPrice"
                        aria-describedby="priceHelp"
                        {...register("price", {
                          required: "Vui lòng nhập giá sản phẩm",
                          min: {
                            value: 0,
                            message: "Giá sản phẩm không được âm",
                          },
                        })}
                      />
                      {errors?.price && (
                        <small className="text-danger">
                          {errors.price.message}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Hình ảnh
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="productImage"
                        aria-describedby="imageHelp"
                        {...register("image", {
                          required: "Vui lòng nhập URL hình ảnh",
                        })}
                      />
                      {errors?.image && (
                        <small className="text-danger">
                          {errors.image.message}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Mô Tả
                      </label>
                      <textarea
                        className="form-control"
                        id="productDescription"
                        rows={8}
                        {...register("description", {
                          required: "Vui lòng nhập mô tả sản phẩm",
                          minLength: {
                            value: 10,
                            message: "Mô tả phải ít nhất 10 ký tự",
                          },
                        })}
                      />
                      {errors?.description && (
                        <small className="text-danger">
                          {errors.description.message}
                        </small>
                      )}
                    </div>
                    <button className="btn btn-primary btn-icon-split">
                      <span className="text">Cập Nhật Sản Phẩm</span>
                    </button>
                  </form>
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

export default UpdateProductPage;
