import "./dealsDay.scss";
import { products } from "../../../../utils/data";
import { Link } from "react-router-dom";
export default function DealsDay() {
  return (
    <section className="dealsDay container">
      <div className="row">
        <div className="day col-12 col-md-4">
          <h5>
            Top Rated<span></span>
          </h5>
          {products.map((el) => {
            if (el.typeDeals === "topRated") {
              return (
                <div key={`aa${el.id}`}>
                  <Link to={`/product/${el.id}`} className="day1">
                    <div className="image">
                      <img src={el.mainImage} alt="notFound" />
                    </div>
                    <div className="text">
                      <p>{el.shortDescription}</p>
                      <div className="rate">
                        {el.rate.map((ele, index) => {
                          return (
                            <img key={`wq${index}`} src={ele} alt="notFound" />
                          );
                        })}
                      </div>
                      <div className="price">
                        <p className="oldPrice">${el.oldPrice}</p>
                        <p className="salePrice">${el.salePrice}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="day col-12 col-md-4">
          <h5>
            Best Categories<span></span>
          </h5>
          {products.map((el) => {
            if (el.typeDeals === "bestCategory") {
              return (
                <div key={`bb${el.id}`}>
                  <Link to={`/product/${el.id}`} className="day1">
                    <div className="image">
                      <img src={el.mainImage} alt="notFound" />
                    </div>
                    <div className="text">
                      <p>{el.shortDescription}</p>
                      <div className="rate">
                        {el.rate.map((ele, index) => {
                          return (
                            <img key={`bq${index}`} src={ele} alt="notFound" />
                          );
                        })}
                      </div>
                      <div className="price">
                        <p className="oldPrice">${el.oldPrice}</p>
                        <p className="salePrice">${el.salePrice}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            } else return null;
          })}
        </div>
        <div className="day col-12 col-md-4">
          <h5>
            Latest Products<span></span>
          </h5>
          {products.map((el) => {
            if (el.typeDeals === "latestProduct") {
              return (
                <div key={`cc${el.id}`}>
                  <Link to={`/product/${el.id}`} className="day1">
                    <div className="image">
                      <img src={el.mainImage} alt="notFound" />
                    </div>
                    <div className="text">
                      <p>{el.shortDescription}</p>
                      <div className="rate">
                        {el.rate.map((ele, index) => {
                          return (
                            <img key={`cq${index}`} src={ele} alt="notFound" />
                          );
                        })}
                      </div>
                      <div className="price">
                        <p className="oldPrice">${el.oldPrice}</p>
                        <p className="salePrice">${el.salePrice}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    </section>
  );
}
