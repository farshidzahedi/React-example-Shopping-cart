import React, { Component } from "react";

export default class Product extends Component {
  clickHandler(id) {
    this.props.addToCart(id)
  }
  
  render() {
    let { id, title, price, img} = this.props;

    return (
      <div className="shop-item">
        <img className="shop-item-image" src={img} />
        <div className="shop-item-details">
          <span className="shop-item-title">{title}</span>
          <span className="shop-item-price">{price} $</span>
          <button
            onClick={this.clickHandler.bind(this, id)}
            className="btn btn-primary shop-item-button"
            type="button"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    );
  }
}
