import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import post3 from "../assets/images/post-3.jpg";

function Blog() {
  return (
    <div className="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Bài viết</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <a href="#" className="more">
              Xem tất cả bài viết
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a href="#" className="post-thumbnail">
                <img src={post1} alt="Image" className="img-fluid" />
              </a>
              <div className="post-content-entry">
                <h3>
                  <a href="#">Ý tưởng cho người lần đầu sở hữu nhà</a>
                </h3>
                <div className="meta">
                  <a href="#" style={{ color: "#3b5d50" }}>
                    12/3/2025
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a href="#" className="post-thumbnail">
                <img src={post2} alt="Image" className="img-fluid" />
              </a>
              <div className="post-content-entry">
                <h3>
                  <a href="#">Làm thế nào để giữ đồ nội thất của bạn sạch sẽ</a>
                </h3>
                <div className="meta">
                  <a href="#" style={{ color: "#3b5d50" }}>
                    1/3/2025
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
            <div className="post-entry">
              <a href="#" className="post-thumbnail">
                <img src={post3} alt="Image" className="img-fluid" />
              </a>
              <div className="post-content-entry">
                <h3>
                  <a href="#">Ý tưởng nội thất căn hộ không gian nhỏ</a>
                </h3>
                <div className="meta">
                  <a href="#" style={{ color: "#3b5d50" }}>
                    25/12/2024
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
