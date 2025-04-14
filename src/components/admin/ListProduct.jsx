import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import '../../assets/css/adminheader.css';
import '../../assets/css/admincontent.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import formatCurrency from '../../consts/formatCurrency';

function ListProductCMP() {
  const [products, setProducts] = useState([]);

  const getList = async (data) => {
    const res = await axios.get('http://localhost:3000/products', data);
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    try {
      if (confirm('Bạn có muốn xóa không?')) {
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success('Xóa thành công');
        getList();
      }
    } catch (error) {
      console.log(error);
      toast.error('Xóa lỗi');
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold" style={{ fontWeight: 700 }}>
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
                      <img width={100} src={product.image} alt={product.name} />
                    </td>
                    <td>{product.description}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 5 }}>
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
                        currentPage === index + 1 ? 'active' : ''
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
    </>
  );
}

export default ListProductCMP;
