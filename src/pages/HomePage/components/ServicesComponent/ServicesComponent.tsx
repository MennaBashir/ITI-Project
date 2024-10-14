import "./services.scss";
import { Car, ShieldCheck, Banknote } from "lucide-react";
export default function ServicesComponent() {
  return (
    <section className="container">
      <div className="row services">
        <div className="col-12 col-md-4 service">
          <div className="imag">
            {" "}
            <Car />
          </div>
          <div className="text">
            <h4>Free Shipping & Returns</h4>
            <p>Free shipping on all orders over $99</p>
          </div>
        </div>
        <div className="col-12 col-md-4 service">
          <div className="imag">
            <Banknote />
          </div>
          <div className="text">
            <h4>Return & Refunf</h4>
            <p>Any back within 30 days</p>
          </div>
        </div>
        <div className="col-12 col-md-4 service">
          <div className="imag">
            <ShieldCheck />
          </div>
          <div className="text">
            <h4>Secure Payment</h4>
            <p>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </div>
    </section>
  );
}
