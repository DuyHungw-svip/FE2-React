function Cart() {
  return (
    <div className="row mb-5">
      <form className="col-md-12" method="post">
        <div className="site-blocks-table">
          <table className="table">
            <thead>
              <tr>
                <th className="product-thumbnail">Hình ảnh</th>
                <th className="product-name">Tên sản phẩm</th>
                <th className="product-price">Giá sản phẩm</th>
                <th className="product-quantity">Số lượng</th>
                <th className="product-total">Thành tiền</th>
                <th className="product-remove">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-thumbnail">
                  <img
                    src="images/product-1.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </td>
                <td className="product-name">
                  <h2 className="h5 text-black">Product 1</h2>
                </td>
                <td>2.300.000₫</td>
                <td>
                  <div
                    className="input-group mb-3 d-flex align-items-center quantity-container"
                    style={{ maxWidth: 120 }}
                  >
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-black decrease"
                        type="button"
                      >
                        −
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control text-center quantity-amount"
                      defaultValue={1}
                      placeholder
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-black increase"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td>2.300.000₫</td>
                <td>
                  <a href="#" className="btn btn-black btn-sm">
                    X
                  </a>
                </td>
              </tr>
              <tr>
                <td className="product-thumbnail">
                  <img
                    src="images/product-2.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </td>
                <td className="product-name">
                  <h2 className="h5 text-black">Product 2</h2>
                </td>
                <td>2.300.000₫</td>
                <td>
                  <div
                    className="input-group mb-3 d-flex align-items-center quantity-container"
                    style={{ maxWidth: 120 }}
                  >
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-outline-black decrease"
                        type="button"
                      >
                        −
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control text-center quantity-amount"
                      defaultValue={1}
                      placeholder
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-black increase"
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td>2.300.000₫</td>
                <td>
                  <a href="#" className="btn btn-black btn-sm">
                    X
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}
export default Cart;
