import React from 'react';

const Img = ({image, name, id, active2}) => (
  <img src={image} alt={name} id={id} className="img-fluid rounded"/>
);

export default (Img);