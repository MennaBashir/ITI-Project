import { Link } from "react-router-dom";
import noWishlistImage from "/assets/empty_wishlist.png";
export default function NoFoundWishlist() {
  return (
    <div className="noWishlist">
      <img src={noWishlistImage} alt="notFound" />
      <button>
        <Link to={"/"} className="btn py-2 px-3">
          Add items to Wishlist
        </Link>
      </button>
    </div>
  );
}
