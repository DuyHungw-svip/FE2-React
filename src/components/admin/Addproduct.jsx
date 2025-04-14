import React from 'react';
import { useNavigate } from 'react-router';
import '../../assets/css/adminheader.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function AddProductPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();

  const addProduct = async (data) => {
    try {
      await axios.post('http://localhost:3000/products', data);
      nav('/admin/listproduct');
      toast.success('Thêm thành công');
    } catch (error) {
      console.log(error);
      toast.error('Lỗi');
    }
  };

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold" style={{ fontWeight: 700 }}>
            THÊM SẢN PHẨM
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
                  {...register('name', { required: 'Không được bỏ trống' })}
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
                    min: { value: 0, message: 'Giá sản phẩm không được âm' },
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
                className="btn btn-primary btn-icon-split"
              >
                <span className="text">Thêm Sản Phẩm</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProductPage;
