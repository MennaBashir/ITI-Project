import discount from "/assets/about/discount.svg";
import hand from "/assets/about/handshake.svg";
import coin from "/assets/about/coins1.svg";

export default function Provides() {
  return (
    <div className="provide container">
      <h2>What We Provide?</h2>
      <div className="row boxes">
        <div className="col-12 col-lg-3 shadow-sm box">
          <img src={discount} alt="notFound" />
          <h4>Best Prices & Offers</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <span>Read more</span>
        </div>
        <div className="col-12 col-lg-3 shadow-sm box">
          <img src={hand} alt="notFound" />
          <h4>Wide Assortment</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <span>Read more</span>
        </div>
        <div className="col-12 col-lg-3 shadow-sm box">
          <img src={coin} alt="notFound" />
          <h4>Free Delivery</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
          <span>Read more</span>
        </div>
      </div>
    </div>
  );
}
