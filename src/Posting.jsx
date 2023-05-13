import React from "react";

export default function Posting({ post }) {
  const { title, imageURL, price, description } = post;
  return (
    <div className="posting">
      <h2>{title}</h2>
      <img src={imageURL} alt={title} />
      <div>
        <label>Price:</label>
        <span>{price}</span>
      </div>
      <div>
        <label>Description:</label>
        <span>{description}</span>
      </div>
    </div>
  );
}
