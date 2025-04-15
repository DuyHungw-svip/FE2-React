import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import { loginAccount } from '../service/auth';
import '../assets/css/login.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await loginAccount(data);
      toast.success('Đăng nhập thành công!');
      localStorage.setItem('Token', res.accessToken);
      localStorage.setItem('UserId', res.user.id);
      setTimeout(() => navigate('/'), 1000);
    } catch (error) {
      toast.error('Email hoặc mật khẩu không đúng!');
      reset();
      setFocus('email');
    }
  };

  return (
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

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  <i className="fas fa-envelope me-2"></i>Email
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary border-0 text-white">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    className={`form-control bg-dark text-white border-secondary ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="name@example.com"
                    {...register('email', {
                      required: 'Không được bỏ trống Email',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email không hợp lệ',
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}</div>
                  )}
                </div>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="password" className="form-label">
                  <i className="fas fa-lock me-2"></i>Mật khẩu
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary border-0 text-white">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className={`form-control bg-dark text-white border-secondary ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="••••••••"
                    {...register('password', {
                      required: 'Không được bỏ trống mật khẩu',
                      minLength: {
                        value: 6,
                        message: 'Mật khẩu tối thiểu 6 kí tự',
                      },
                    })}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password.message}</div>
                  )}
                </div>
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-outline-light btn-lg">
                  <i className="fas fa-sign-in-alt me-2"></i> Đăng nhập
                </button>
              </div>

              <div className="text-center">
                <p className="small mb-1">
                  <a href="#" className="text-decoration-none text-light">
                    <i className="fas fa-question-circle me-1"></i>Quên mật khẩu?
                  </a>
                </p>
                <p className="small">
                  <i className="fas fa-user-plus me-1"></i>
                  Bạn chưa có tài khoản?{' '}
                  <Link to="/register" className="text-warning fw-bold text-decoration-none">
                    Đăng ký ngay
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Login;
