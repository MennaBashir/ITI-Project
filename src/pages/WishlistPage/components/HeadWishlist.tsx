import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
export default function HeadWishlist() {
  const { wishlistItem } = useSelector((state: RootState) => state.wishlist);
  return (
    <header>
      <h1>Your Wishlist</h1>
      <h6>
        There are <span>{wishlistItem.length}</span> products in this list
      </h6>
    </header>
  );
}
