import { Link } from "react-router";

function Banner({ title, title2, des, isShowBtn = false }) {
  return (
    <div className="hero" style={{ backgroundColor: '#000', color: '#fff', padding: '180px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: '1' }}>
          <div className="intro-excerpt">
            <h1>
              {title}
              <span style={{ display: 'block' }}>{title2}</span>
            </h1>
            <p style={{ marginBottom: '20px' }}>{des}</p>
            {isShowBtn && (
              <p>
                <Link to={'/shop'} style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#555', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                  Mua ngay
                </Link>
                <Link to={'/shop'} style={{ padding: '10px 20px', border: '2px solid #555', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                  Khám phá
                </Link>
              </p>
            )}
          </div>
        </div>
        <div style={{ flex: '1', textAlign: 'center' }}>
          <div className="hero-img-wrap" style={{ marginTop: '-50px' }}> {/* Điều chỉnh vị trí ảnh */}
            <img src="https://frodos.com.vn/wp-content/uploads/2022/08/ro1.jpeg" alt="Couch" style={{ maxWidth: '100%', borderRadius: '10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
