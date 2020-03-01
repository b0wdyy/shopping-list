import React, { Component } from "react";
import "./App.scss";

import Input from "./components/Input";
import Items from "./components/Items";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  addItem = item => {
    let items = this.state.items;
    items.push({ id: items.length, content: item });

    this.setState({
      items
    });
  };

  removeItem = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <Input addItem={this.addItem} />
        <Items items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
