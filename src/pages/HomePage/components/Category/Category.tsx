import "./category.scss";
import { Link } from "react-router-dom";
import { dataCategory } from "./dataCategory";
export default function Category() {
  return (
    <section className="categoryComponent container">
      {dataCategory.map((ele) => {
        return (
          <div key={ele.id}>
            <Link to={`/category/${ele.categoryNam}`}>
              <div className="imag">
                <img src={ele.image} alt="notFound" />
                <div className="text">
                  <h2>{ele.title}</h2>
                  <p>{ele.count} Products</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
