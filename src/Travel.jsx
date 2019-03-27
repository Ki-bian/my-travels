import React from "react";

const Travel = ({ data }) => (
  <figure>
    <img src={data.photo} alt={data.country} />
    <figcaption>
      <blockquote>{data.destination}</blockquote>
      <cite>{data.country}</cite>
    </figcaption>
  </figure>
);

export default Travel;
