import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    fName: "Ganesh",
    lName: "Patro",
    email: "ganeshpatro321@gmail.com",
    age: 21,
    onlineStatus: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    console.log(this.props);
  }

  render() {
    const { posts } = this.props;
    console.log(this.props);
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {/* {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const configPost = {
                  title: post.title,
                  desc: post.body
                };
                return <ListItem key={index} {...configPost} />;
              })}
            </div>
          )} */}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.props
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
