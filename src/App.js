import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
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
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
