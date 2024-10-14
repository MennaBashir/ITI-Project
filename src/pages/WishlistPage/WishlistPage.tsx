import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import HeadWishlist from "./components/HeadWishlist";
import TableWishlist from "./components/TableWishlist";
import "./wishlist.scss";
import NoFoundWishlist from "./components/NoFoundWishlist";
export default function WishlistPage() {
  const { wishlistItem } = useSelector((state: RootState) => state.wishlist);
  return (
    <section className="container wishlist">
      {wishlistItem.length > 0 ? (
        <>
          <HeadWishlist />
          <TableWishlist />
        </>
      ) : (
        <NoFoundWishlist />
      )}
    </section>
  );
}
