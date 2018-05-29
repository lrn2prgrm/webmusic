import React from 'react';

const ListItem = ({img, nameSong, artist, time}) => (
  <div className="list-group-item">
    <div className="row">
      <div className="img-box d-inline-block mx-2">
        <img src={img} alt={artist} className="img-fluid"/>
      </div>
      <p className="m-0 mt-3 col">{nameSong}<span className="d-block font-italic font-small">{artist}</span></p>
      <div className="img-share d-flex justify-content-center align-items-center">
        <img src="./assets/images/compartir.png" alt="Share" className="img-fluid d-block"/>
      </div>
    </div>
  </div>
);

export default ListItem;