import React, { Component } from "react";
import "../scss/input.scss";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ""
    };
  }

  setItem = e => {
    this.setState({
      item: e.target.value
    });
  };

  addItem = () => {
    if (this.state.item !== "") {
      this.props.addItem(this.state.item);

      this.setState({
        item: ""
      });
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>
            Shopping<span>List</span>
          </h1>
        </header>
        <div className="input">
          <input
            type="text"
            name="item"
            id="addItem"
            placeholder="Voeg een item toe..."
            value={this.state.item}
            onChange={this.setItem}
          />
          <button onClick={this.addItem}>+</button>
        </div>
      </div>
    );
  }
}

export default Input;
