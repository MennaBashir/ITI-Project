import {
  ShoppingBasket,
  Heart,
  ArrowLeftRight,
  SearchCheck,
} from "lucide-react";
import star from "/assets/fillStar.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

export default function NewProducts() {
  const { adminProducts } = useSelector((state: RootState) => state.admin);

  return (
    <>
      {adminProducts.map((ele, index) => {
        return (
          <div key={`new${index}`} className="box box1">
            <div className="image image1">
              <img src={ele.mainImage} className="mainImage" alt="notFound" />
              <img src={ele.hoverImage} className="hoverImage" alt="notFound" />
            </div>
            <div className="text">
              <p className="title">{ele.shortDescription}</p>
              <div className="rate">
                <img src={star} alt="notFound" />
                <img src={star} alt="notFound" />
                <img src={star} alt="notFound" />
                <img src={star} alt="notFound" />
                <img src={star} alt="notFound" />
              </div>
              <p className="price">${ele.salePrice}.00</p>
            </div>
            <div className="button">
              <a>
                <button className="btn btn-primary">
                  <ShoppingBasket
                    color="white"
                    width="18px"
                    strokeWidth={1.5}
                  />
                  Add To Cart
                </button>
              </a>
            </div>
            <div className="iconLeft">
              <ul>
                <li>
                  <a>
                    <Heart />
                  </a>
                </li>
                <li>
                  <a>
                    <ArrowLeftRight />
                  </a>
                </li>
                <li>
                  <a>
                    <SearchCheck />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}
