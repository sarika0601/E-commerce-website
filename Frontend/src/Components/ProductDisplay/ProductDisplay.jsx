import React from "react";
import "./ProductDisplay.css";
import star_icon from "../ImagesFolder/star_icon.png";
import star_dull_icon from "../ImagesFolder/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div classname="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productDisplay-img"></div>
        <img className="productdisplay-main-img" src={product.image} alt="" />
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="oldprices">${product.old_price}</div>
          <div className="newprices">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          A lightweight,usually knitted,pullover shirt,close-fitting .
        </div>
        <div className="productdisplay-right-size">
          <h1>Select size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span> Category:</span> Women,T-Shirt,Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span> tags:</span> Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
