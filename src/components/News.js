import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 25,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.bool,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async componentDidMount() {
    this.getNews();
  }
  getNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&country=${
      this.props.country
    }&apiKey=1a5a0b5aa3e34d52bb76b172f89280d0&page=${
      this.state.page + 1
    }&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let dataParse = await data.json();
    this.setState({
      articles: this.state.articles.concat(dataParse.articles),
      loading: false,
    });
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.getNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMokey - Top Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.handleNextClick}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}
        >
          <div className="conainter">
            <div className="row">
              {this.state.articles.map(
                ({ title, description, urlToImage, url, source }, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <NewsItem
                        title={title}
                        description={description}
                        newsUrl={url}
                        imageUrl={urlToImage}
                        source={source}
                      ></NewsItem>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
