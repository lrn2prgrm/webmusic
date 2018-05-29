import React from 'react';

const Item = ({nameSong, artist, img, votes, id}) => (
  <div className="card border-success mb-3">
    <div className="card-header bg-transparent border-success">{nameSong}</div>
    <div className="card-body text-success">
      <h5 className="card-title">{artist}</h5>
    </div>
  </div>
);

export default Item;