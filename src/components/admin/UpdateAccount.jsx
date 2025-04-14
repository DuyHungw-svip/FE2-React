import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router';
import '../../assets/css/adminheader.css';
import $ from 'jquery';
import ListProduct from '../../pages/admin/ListProduct';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';

function UpdateAccountPage() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const getList = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/users/${id}`
      );
      reset({
        ...data,
        is_admin: data.is_admin ? 'true' : 'false',
      });
    } catch (error) {
      console.log(error);
      toast.error('Lỗi');
    }
  };

  useEffect(() => {
    getList(id);
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.put(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {
        ...data,
        is_admin: data.is_admin === 'true',
      });
      navigate('/admin/listaccount');
      toast.success('Cập nhật thành công');
    } catch (error) {
      console.log(error);
      toast.error('Không thể cập nhật');
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold" style={{ fontWeight: 700 }}>
            CẬP NHẬT TÀI KHOẢN
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Họ tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  {...register('name', {
                    required: 'Không được bỏ trống',
                  })}
                />
                {errors?.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email" // Changed to type email
                  className="form-control"
                  id="email"
                  {...register('email', {
                    required: 'Không được bỏ trống',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Email không hợp lệ',
                    },
                  })}
                />
                {errors?.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Mật Khẩu
                </label>
                <input
                  type="password" // Changed to type password
                  className="form-control"
                  id="password"
                  {...register('password', {
                    required: 'Không được bỏ trống',
                    minLength: {
                      value: 6,
                      message: 'Mật khẩu phải có ít nhất 6 ký tự',
                    },
                  })}
                />
                {errors?.password && (
                  <small className="text-danger">
                    {errors.password.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  {...register('phone', {
                    required: 'Không được bỏ trống',
                    minLength: {
                      value: 10,
                      message: 'Số điện thoại phải có ít nhất 10 chữ số',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Số điện thoại không được quá 15 chữ số',
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Số điện thoại không hợp lệ',
                    },
                  })}
                />
                {errors?.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  {...register('address', {
                    required: 'Không được bỏ trống',
                  })}
                />
                {errors?.address && (
                  <small className="text-danger">
                    {errors.address.message}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="is_admin" className="form-label">
                  Quyền hạn
                </label>
                <select
                  className="form-select"
                  id="is_admin"
                  {...register('is_admin')}
                >
                  <option value="true">Admin</option>
                  <option value="false">Member</option>
                </select>
              </div>
              <button
                style={{ background: '#4e73df', border: '1px solid #4e73df' }}
                type="submit"
                className="btn btn-primary mt-3"
              >
                Cập nhật tài khoản
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateAccountPage;
