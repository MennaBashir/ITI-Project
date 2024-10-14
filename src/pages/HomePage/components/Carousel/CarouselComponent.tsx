import "./carousel.scss";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
export default function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const date = new Date();
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="carouselComponent">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel1 caroselImg">
          <article className="carouselDescription1 col-5">
            <p className="newArrival">New Arrivals {date.getFullYear()}</p>
            <h1>
              The Clothing <br />
              Collection
            </h1>
            <p className="sale">
              Sale up to <span>30% off</span>
            </p>
            <p className="free">
              Free returns extended to 30 days after delivery
            </p>
            <button>Shop Now</button>
          </article>
        </Carousel.Item>
        <Carousel.Item className="carousel2 caroselImg">
          <article className="col-5 carouselDescription2">
            <p className="timePiece">TimePieces That Make A Statement</p>
            <h1>
              UP TO <span>40% OFF</span>
            </h1>
            <p className="biggerOffer">Biggest Offers On This Session</p>
            <button>Shop Now</button>
          </article>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
