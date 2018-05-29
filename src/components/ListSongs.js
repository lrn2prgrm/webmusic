import React from 'react';
import ListItem from './ListItem';

const ListSongs = ({songs}) => (
  <div className="list-group list-group-flush">
    {songs.songs.map((elm, i) => (
      <ListItem
        key = {elm.id}
        {...elm}
      />
    ))}
  </div>
);

export default ListSongs;