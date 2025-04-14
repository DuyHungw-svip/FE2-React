function ContentAdmin() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold" style={{ fontWeight: 700 }}>
          DANH SÁCH SẢN PHẨM
        </h6>
      </div>
      <div className="card-body">
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
              <tr>
                <td>1</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>
                  <img
                    width={100}
                    src={
                      'https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-PNG-HD-Quality.png'
                    }
                    alt=""
                  />
                </td>
                <td>2011/04/25</td>
                <td>
                  <div style={{ display: 'flex', gap: 5 }}>
                    <Link className="button-circle-edit">
                      <div className="icon-circle-edit">
                        <i className="fa fa-wrench" />
                      </div>
                    </Link>
                    <Link className="button-circle-delete">
                      <div className="icon-circle-edit">
                        <i className="fa fa-trash" />
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default ContentAdmin;
