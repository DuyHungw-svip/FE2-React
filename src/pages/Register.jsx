import { Link, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import login from "../assets/images/login.jpg";
import homely from "../assets/images/homely-logo.png";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { registerAccount } from "../service/auth";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const onsubmit = async (data) => {
    data.is_admin = false;
    try {
      await registerAccount(data);
      toast.success("Đăng ký thành công");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.log(error);
      reset();
      setFocus("email");
      toast.error("Email đã tồn tại!");
    }
  };

  return (
    <>
      <section className="min-vh-100 d-flex align-items-center justify-content-center bg-black">
        <div className="container">
          <div className="row justify-content-center shadow rounded-4 overflow-hidden">
            {/* Left image */}
            <div className="col-md-6 d-none d-md-block p-0">
            <img
              src="https://tintuc.dienthoaigiakho.vn/wp-content/uploads/2023/04/hinh-nen-3d-dep-11.jpg"
              alt="Rolex Background"
              className="img-fluid h-100 w-100"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>

            {/* Right form */}
            <div className="col-md-6 bg-dark text-white p-5">
            <div className="text-center mb-4">
              <i className="fas fa-clock fa-3x text-warning mb-3"></i>
              <h2 className="fw-bold text-uppercase">Đồng Hồ Rolex</h2>
              <h5 className="mt-3">Chào mừng đến với chúng tôi!</h5>
              <p className="text-light small">Vui lòng đăng nhập để tiếp tục</p>
            </div>


              <form onSubmit={handleSubmit(onsubmit)} noValidate>
                <div className="form-group mb-3">
                  <label htmlFor="name">
                    <i className="fas fa-user me-2"></i>Họ tên
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-secondary text-white border-0">
                      <i className="fas fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control bg-dark text-white border-secondary ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Họ tên"
                      {...register("name", {
                        required: "Không được bỏ trống họ tên",
                        minLength: {
                          value: 2,
                          message: "Họ tên phải ít nhất 2 kí tự",
                        },
                      })}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="address">
                    <i className="fas fa-map-marker-alt me-2"></i>Địa chỉ
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-secondary text-white border-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control bg-dark text-white border-secondary ${errors.address ? "is-invalid" : ""}`}
                      placeholder="Địa chỉ"
                      {...register("address", {
                        required: "Không được bỏ trống địa chỉ",
                        minLength: {
                          value: 2,
                          message: "Địa chỉ phải ít nhất 2 kí tự",
                        },
                      })}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="phone">
                    <i className="fas fa-phone me-2"></i>Số điện thoại
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-secondary text-white border-0">
                      <i className="fas fa-phone"></i>
                    </span>
                    <input
                      type="number"
                      className={`form-control bg-dark text-white border-secondary ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="Số điện thoại"
                      {...register("phone", {
                        required: "Không được bỏ trống số điện thoại",
                        minLength: {
                          value: 1,
                          message: "Số điện thoại phải ít nhất 1 kí tự",
                        },
                        maxLength: {
                          value: 10,
                          message: "Số điện thoại không được quá 10 kí tự",
                        },
                      })}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">
                    <i className="fas fa-envelope me-2"></i>Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-secondary text-white border-0">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      className={`form-control bg-dark text-white border-secondary ${errors.email ? "is-invalid" : ""}`}
                      placeholder="name@example.com"
                      {...register("email", {
                        required: "Không được bỏ trống Email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Địa chỉ email không hợp lệ",
                        },
                      })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="password">
                    <i className="fas fa-lock me-2"></i>Mật khẩu
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-secondary text-white border-0">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className={`form-control bg-dark text-white border-secondary ${errors.password ? "is-invalid" : ""}`}
                      placeholder="••••••••"
                      {...register("password", {
                        required: "Không được bỏ trống mật khẩu",
                        minLength: {
                          value: 6,
                          message: "Mật khẩu phải ít nhất 6 kí tự",
                        },
                      })}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                  </div>
                </div>

                <div className="text-center mb-3">
                  <p className="small">
                    <i className="fas fa-sign-in-alt me-1"></i>
                    Đã có tài khoản?{" "}
                    <Link to="/login" className="text-warning fw-bold text-decoration-none">
                      Đăng nhập
                    </Link>
                  </p>
                </div>

                <div className="d-grid">
                  <button className="btn btn-outline-light btn-lg" type="submit">
                    <i className="fas fa-user-plus me-2"></i>Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default Register;
