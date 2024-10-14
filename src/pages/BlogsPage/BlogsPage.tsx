import "./blogs.scss";
import { dataBlog } from "./blogData";
import Pagination from "@mui/material/Pagination";
import { ChangeEvent, useState } from "react";
import {
  Calendar,
  Heart,
  MessageCircleMore,
  Share2,
  ArrowRight,
} from "lucide-react";
export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const to = currentPage * pageSize;
  const from = to - pageSize;
  const handlePagination = (_: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  return (
    <section className="container blogs">
      <div className=" boxes">
        {dataBlog.slice(from, to).map((blog) => {
          return (
            <div key={`${blog.like}`} className="shadow-sm cardBox">
              <div className="image">
                {" "}
                <img src={blog.image} alt="notFound" />
              </div>
              <div className="content">
                <h4>{blog.title}</h4>
                <div className="text">
                  <p>
                    <Calendar /> {blog.date}
                  </p>
                  <p className="icons">
                    <span>
                      <Heart /> {blog.like}
                    </span>
                    <span>
                      <MessageCircleMore />
                      {blog.comment}
                    </span>
                    <span>
                      <Share2 />
                      {blog.share}
                    </span>
                  </p>
                </div>
                <p className="description">{blog.description}</p>
                <p className="learn">
                  Learn More <ArrowRight />
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        onChange={handlePagination}
        color="primary"
        page={currentPage}
        count={Math.ceil(dataBlog.length / pageSize)}
        variant="outlined"
        shape="rounded"
        className="paginateBox container"
      />
    </section>
  );
}
