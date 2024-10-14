import Banner from "./components/Banner/Banner";
import BestSelling from "./components/BestSelling/BestSelling";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import Category from "./components/Category/Category";
import CoreProduct from "./components/CoreProduct/CoreProduct";
import DealsDay from "./components/DealsDay/DealsDay";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import NewArrival from "./components/NewArrival/NewArrival";
import NewCollection from "./components/NewCollection/NewCollection";
import ServicesComponent from "./components/ServicesComponent/ServicesComponent";
import "./homePage.scss";

export default function HomePage() {
  return (
    <>
      <CarouselComponent />
      <Category />
      <NewCollection />
      <FeaturedProducts />
      <BestSelling />
      <Banner />
      <NewArrival />
      <CoreProduct />
      <DealsDay />
      <ServicesComponent />
    </>
  );
}
