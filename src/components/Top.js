import React from 'react';
import ListSongs from './ListSongs';

const Top = ({data}) => (
  <div className="col-12 col-md-6">
    <h2 className="subtitle">{data.textParagraph}</h2>
    <ListSongs songs = {data}/>
  </div>
);

export default Top;
