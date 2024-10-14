import { Link, useParams } from "react-router-dom";
import "./product.scss";
import { products } from "../../utils/data";
import { Heart, ArrowRightLeft, ShoppingCart } from "lucide-react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperClass } from "swiper/types";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IProduct } from "../../app/interface/index";
import { useAppDispatch } from "../../app/store";
import { addItemToCart } from "../../app/features/cart/cartSlice";
import { addItemToWishlist } from "../../app/features/wishlist/wishlistSlice";
import { Toaster, toast } from "react-hot-toast";

export default function ProductPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const { productId } = useParams();
  const productItem = products.filter((el) => {
    if (productId === el.id) {
      return el;
    }
  });
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<string>("");
  const funcShopCart = (item: IProduct) => {
    let quantity = parseInt(count);
    const newItem = { ...item, quantity: parseInt(count) ? quantity : 1 };
    dispatch(addItemToCart(newItem));
    toast.success("Product added successfully!", {
      position: "top-right",
    });
  };
  const funcWishlist = (item: IProduct) => {
    dispatch(addItemToWishlist(item));
    toast.success("Product added to wishlist ❤️", {
      position: "top-right",
    });
  };
  return (
    <section className="container productPage">
      {productItem.map((el) => {
        return (
          <div key={el.id}>
            <Toaster />
            <div className="row rowBox">
              <div className="col-12 col-md-5 images">
                <Swiper
                  spaceBetween={10}
                  thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img src={el.previewImage1} alt="notFound" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={el.previewImage2} alt="notFound" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={el.previewImage3} alt="notFound" />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={el.previewImage1} alt="notFound" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={el.previewImage2} alt="notFound" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={el.previewImage3} alt="notFound" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-12 col-md-6 content">
                <h2 className="title">{el.title}</h2>
                <div className="rate">
                  {el.rate.map((ele, index) => {
                    return <img src={ele} alt="notFound" key={`at${index}`} />;
                  })}
                </div>
                <div className="price">
                  <span className="salePrice">${el.salePrice}</span>
                  <span className="oldPrice">${el.oldPrice}</span>
                </div>
                <p className="longDescription">{el.longDescription}</p>
                <div className="compare">
                  <input
                    type="number"
                    min={1}
                    defaultValue={1}
                    onChange={(e) => setCount(e.target.value)}
                  />
                  <button onClick={() => funcShopCart(el)}>
                    <ShoppingCart />
                    Add To Cart
                  </button>
                  <div className="icons">
                    <div className="icon" onClick={() => funcWishlist(el)}>
                      <Heart />
                    </div>
                    <div className="icon">
                      <Link to={"/compare"}>
                        <ArrowRightLeft />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <p>
                    Type:<span>{el.nameCategory}</span>
                  </p>
                  <p>
                    SKU:<span>{el.suk}</span>
                  </p>
                  <p>
                    Tags:
                    {el.Tags.map((ele) => {
                      return <span key={ele}>{ele}</span>;
                    })}
                  </p>
                </div>
              </div>
            </div>
            <div className="description">
              <Tabs defaultActiveKey="profile" className="mb-3">
                <Tab eventKey="home" title="Introduction">
                  <p className="intro">{el.introduction}</p>
                </Tab>
                <Tab eventKey="profile" title="Features">
                  <ul>
                    {el.features.map((ele, index) => {
                      return <li key={`tb${index}`}>{ele}</li>;
                    })}
                  </ul>
                </Tab>
              </Tabs>
            </div>
          </div>
        );
      })}
    </section>
  );
}
