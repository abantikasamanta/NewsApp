import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, newsUrl, imageUrl, author,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 badge rounded-pill bg-primary"
            style={{zIndex:1,left: "78%"}}
          >
            {source.name}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"}
              </small>
            </p>
            <a
              href={
                !newsUrl
                  ? newsUrl
                  : "https://www.investors.com/wp-content/uploads/2019/03/stock-Federal_Reserve-spring-12-adobe.jpg"
              }
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
