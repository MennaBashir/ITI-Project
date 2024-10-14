import { Link } from "react-router-dom";
import "./coreProduct.scss";
import imag from "/assets/banner-04.png";
export default function CoreProduct() {
  return (
    <section className="container">
      <div className="row flex-row-reverse coreProduct">
        <div className="col-12 col-md-6">
          <img src={imag} alt="notFound" />
        </div>
        <div className="col-12 col-md-6">
          <h3>IdeaPad Gaming 3 laptop</h3>
          <p>Corei7-11370H / 16GB RAM / 512GB SSD / GeForce GTX 3050 4GB</p>
          <h4>$199.00</h4>
          <button className="btn btn-primary rounded-0">
            <Link to={"/product/p-6"}>SHOP NOW</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
