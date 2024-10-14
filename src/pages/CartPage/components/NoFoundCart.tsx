import { Link } from "react-router-dom";
import "./noCart.scss";
import noImage from "/assets/nocart.png";
export default function NoFoundCart() {
  return (
    <div className="noCart">
      <img src={noImage} alt="notFound" />
      <p>
        Looks like you have not added anything to your cart. Go ahead & explore
        top categories.
      </p>
      <button>
        <Link to={"/"}>Shop our products</Link>
      </button>
    </div>
  );
}
