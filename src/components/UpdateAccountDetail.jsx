import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

function UpdateAccountDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm();
  const getList = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/${id}`
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

  const onSubmit = async (data) => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/users/${id}`, data);
      navigate(`/profile/${id}`);
      toast.success("Cập nhật thành công");
    } catch (error) {
      console.log(error);
      toast.error("Không thể cập nhật");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="file-upload" onSubmit={handleSubmit(onSubmit)}>
              <div className="row gx-5 mb-5">
                <div className="col-xxl-8 mb-5 mb-xxl-0">
                  <div className="bg-secondary-soft rounded px-4 py-5">
                    <div className="g-3 row">
                      <h4 className="mb-4 mt-0">Cập nhật tài khoản</h4>
                      <div className="col-md-6">
                        <label className="form-label">Họ tên *</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("name")}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          {...register("email")}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Số điện thoại *</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("phone")}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                          Địa chỉ *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("address")}
                        />
                      </div>
                      <div className="col-md-6">
                        <button className="btn btn-primary">Cập nhật</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateAccountDetail;
