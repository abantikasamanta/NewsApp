import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.js";
import PropTypes from "prop-types";

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
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=1a5a0b5aa3e34d52bb76b172f89280d0&pageSize=${this.props.pagesize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let dataParse = await data.json();
    // this.setState({
    //   articles: dataParse.articles,
    //   totalResult: dataParse.totalResults,
    //   loading: false,
    // });
    this.getNews();
  }
  getNews = async () => {
    this.setState({ loading: true });
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
      articles: dataParse.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    this.setState({ loading: true, page: this.state.page + 1 });
    this.getNews();
  };
  handlePrevClick = async () => {
    this.setState({ loading: true,page: this.state.page - 1  });
    this.getNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMokey - Top Headlines</h1>
        <div className="container my-3">
          {this.state.loading && <Spinner />}
        </div>
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map(
              ({ title, description, urlToImage, url, author, source }) => {
                return (
                  <div className="col-md-4" key={url}>
                    <NewsItem
                      title={title}
                      description={description}
                      newsUrl={url}
                      imageUrl={urlToImage}
                      author={author}
                      source={source}
                    ></NewsItem>
                  </div>
                );
              }
            )}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pagesize)
            }
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
