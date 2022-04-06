import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <figure className="card animate__animated animate__fadeInLeft">
      <img src={url} alt={title.trim() ? title : "There's no title"} />
      <figcaption>{title.trim() ? title : "There's no title"}</figcaption>
    </figure>
  );
};
