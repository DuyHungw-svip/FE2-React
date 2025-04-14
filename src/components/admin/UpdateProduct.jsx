import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import '../../assets/css/adminheader.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from 'react-hook-form';

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
      toast.error('Lỗi');
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
        navigate('/admin/listproduct');
      }, 500);
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
            CẬP NHẬT SẢN PHẨM
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <form onSubmit={handleSubmit(addProduct)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Tên Sản Phẩm
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  aria-describedby="nameHelp"
                  {...register('name', {
                    required: 'Không được bỏ trống',
                  })}
                />
                {errors?.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Giá Sản Phẩm
                </label>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="productPrice"
                  aria-describedby="priceHelp"
                  {...register('price', {
                    required: 'Vui lòng nhập giá sản phẩm',
                    min: {
                      value: 0,
                      message: 'Giá sản phẩm không được âm',
                    },
                  })}
                />
                {errors?.price && (
                  <small className="text-danger">{errors.price.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Hình ảnh
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="productImage"
                  aria-describedby="imageHelp"
                  {...register('image', {
                    required: 'Vui lòng nhập URL hình ảnh',
                  })}
                />
                {errors?.image && (
                  <small className="text-danger">{errors.image.message}</small>
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
                  {...register('description', {
                    required: 'Vui lòng nhập mô tả sản phẩm',
                    minLength: {
                      value: 10,
                      message: 'Mô tả phải ít nhất 10 ký tự',
                    },
                  })}
                />
                {errors?.description && (
                  <small className="text-danger">
                    {errors.description.message}
                  </small>
                )}
              </div>
              <button
                style={{ background: '#4e73df', border: '1px solid #4e73df' }}
                className="btn btn-primary btn-icon-split mt-2"
              >
                <span className="text">Cập Nhật Sản Phẩm</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProductPage;
