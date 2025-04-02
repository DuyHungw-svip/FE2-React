import { Link } from "react-router";
import couch from "../assets/images/couch.png";

function Banner({ title, title2, des, isShowBtn = false }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>
                {title}
                <span className="d-block">{title2}</span>
              </h1>
              <p className="mb-4">{des}</p>
              {isShowBtn && (
                <p>
                  <Link to={"/shop"} className="btn btn-secondary me-2">
                    Mua ngay
                  </Link>
                  <Link to={"/shop"} className="btn btn-white-outline">
                    Khám phá
                  </Link>
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src={couch} className="img-fluid" alt="Couch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
