import "./banner.scss";
import { MoveRight } from "lucide-react";
export default function Banner() {
  return (
    <section className="bannerSection">
      <div className="container">
        <div className="imagBanner row">
          <div className="col-12 col-md-5 text">
            <h4>Weekend Sale</h4>
            <h3>TOP ELECTRONIC DEALS</h3>
            <h5>Start From $55</h5>
          </div>
          <h1 className="col-5 col-md-3">25%</h1>
          <div className="col-7 col-md-4">
            <button>
              GET DEAL NOW <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
