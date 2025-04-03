import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router";
import "../../assets/css/adminheader.css";
import "../../assets/css/admincontent.css";
import $ from "jquery";
import ListProduct from "../../pages/admin/ListProduct";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import formatCurrency from "../../consts/formatCurrency";

function Header() {
  const [products, setProducts] = useState([]);

  const getList = async (data) => {
    const res = await axios.get("http://localhost:3000/products", data);
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    try {
      if (confirm("Bạn có muốn xóa không?")) {
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success("Xóa thành công");
        getList();
      }
    } catch (error) {
      console.log(error);
      toast.error("Xóa lỗi");
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                  DANH SÁCH SẢN PHẨM
                </h6>
              </div>
              <div className="card-body">
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Tìm kiếm tại đây..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ height: 45 }}
                  />
                </div>

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
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Hình ảnh</th>
                        <th>Mô tả</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentProducts.map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{formatCurrency(product.price)}</td>
                          <td>
                            <img
                              width={100}
                              src={product.image}
                              alt={product.name}
                            />
                          </td>
                          <td>{product.description}</td>
                          <td>
                            <div style={{ display: "flex", gap: 5 }}>
                              <Link
                                to={`/admin/updateproduct/${product.id}`}
                                className="button-circle-edit"
                              >
                                <div className="icon-circle-edit">
                                  <i className="fa fa-wrench" />
                                </div>
                              </Link>
                              <Link
                                onClick={() => handleDelete(product.id)}
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

                  <div className="d-flex justify-content-center mt-4">
                    <nav aria-label="Page navigation">
                      <ul className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                          <li
                            key={index + 1}
                            className={`page-item ${
                              currentPage === index + 1 ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
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

export default Header;
