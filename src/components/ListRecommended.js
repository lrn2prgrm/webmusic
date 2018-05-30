import React from 'react';

const ListRecommended = ({img, nameSong, artist}) => (
  <div className="col-4 my-2">
    <div className="card">
      <img className="card-img-top" src={img} alt="Card cap"/>
      <div className="card-body">
        <p className="card-text">{nameSong}</p>
        <span>{artist}</span>
      </div>
    </div>
  </div>
);

export default ListRecommended;