import "./newCollection.scss";
import card1 from "/assets/tv.png";
import card2 from "/assets/camera.png";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function NewCollection() {
  return (
    <section className="newCollection container">
      <div className="card2 cardCommon shadow-sm">
        <div className="text">
          <p className="newText">NEW ARRIVALS</p>
          <h1>
            Camera <span className="text-primary">4K</span>
          </h1>
          <p className="cameraPrice">from $1200.00</p>
          <button className="btn btn-dark">
            <Link to={"/product/p-1"}>
              Shop Now
              <MoveRight color="white" width="18px" />
            </Link>
          </button>
        </div>
        <div>
          <img src={card2} alt="notFound" />
        </div>
      </div>
      <div className="card1 cardCommon shadow-sm ">
        <div className="text">
          <p className="newText">NEW COLLECTION</p>
          <h1>Summer Sale</h1>
          <p className="fs-4">
            up to <span className="text-primary">30% OFF</span>
          </p>
          <button className="btn btn-primary">
            <Link to={"/product/p-6"}>
              Shop Now
              <MoveRight color="white" width="18px" />
            </Link>
          </button>
        </div>
        <div>
          <img src={card1} alt="notFound" />
        </div>
      </div>
    </section>
  );
}
