import React, {Component} from "react";
import Search from "./components/Search";
import Header from "./components/Header";
import Filter from "./components/Filter";
import New from "./components/New";

class App extends Component{
  render() {
    return (
    <div className="container">
      <Header />
      <div className="composition">
        <Search />
        <Filter />
        <New />
      </div>
    </div>
  );
  }
}

export default App;
