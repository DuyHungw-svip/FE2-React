import { Link } from "react-router";
import "../assets/css/error.css";

function Error() {
  return (
    <>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <Link to={"/"} class="more-link">
          Quay lại trang chủ
        </Link>
      </div>
    </>
  );
}
export default Error;
