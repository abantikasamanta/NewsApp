import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, newsUrl, imageUrl, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://katu.com/resources/media/8aea679f-e687-4321-b3f7-1a440f95e316-large16x9_Pertussis.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
              <h6 className="card-text">
                By {source.name}
              </h6>
            <a
              href={newsUrl}
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
