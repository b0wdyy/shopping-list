import React, { Component } from "react";

class Items extends Component {
  render() {
    return (
      <div className="items">
        {this.props.items.map(item => (
          <div key={item.id} className="item">
            <p>{item.content}</p>
            <button onClick={this.props.removeItem.bind(this, item.id)}>
              -
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Items;
