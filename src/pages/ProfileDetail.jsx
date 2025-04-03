import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router';
import avt from '../assets/images/avtprofile.png';
import '../assets/css/profile.css';
import { profile } from '../service/auth';

function ProfileDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getList = async () => {
    try {
      const res = await profile(id);
      setUsers(res);
    } catch (error) {
      console.log(error);
      toast.error('Lỗi');
    }
  };
  useEffect(() => {
    if (id) {
      getList();
    }
  }, [id]);

  const handleOpenFB = () => {
    window.open('https://www.facebook.com/xengdayy');
  };
  const handleOpenBE = () => {
    window.open('https://www.behance.net/lenguyenxeng');
  };
  const handleOpenIG = () => {
    window.open('https://www.instagram.com/tungthuyfake');
  };
  const handleOpenGithub = () => {
    window.open('https://github.com/LeNguyenXeng');
  };

  const handleLogout = (id) => {
    try {
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
  const nextPage = () => {
    navigate(`/updateaccount/${users.id}`);
  };
  const adminLogin = () => {
    navigate('/admin/home');
  };

  const isAdmin = users.is_admin;

  return (
    <div>
      <section style={{ backgroundColor: '#eee' }}>
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
                  <button
  onClick={nextPage}
  type="button"
  data-mdb-button-init
  data-mdb-ripple-init
  className="btn btn-outline-primary mb-2 ms-1"
  style={{ background: '#000', border: '#000', color: '#fff' }}
>
  Cập nhật tài khoản
</button>


                  <div className="d-flex justify-content-center mb-2">
                    {isAdmin ? (
                      <>
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

                        <button
                          onClick={adminLogin}
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-outline-primary ms-1"
                          style={{ background: '#198754', border: '#198754' }}
                        >
                          Admin Login
                        </button>
                      </>
                    ) : (
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
                    )}
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
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
                        {isAdmin ? 'Admin' : 'Thành viên'}
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
  );
}
export default ProfileDetail;
