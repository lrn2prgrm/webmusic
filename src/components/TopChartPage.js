import React from 'react';
import Item from './ListTopCharts';
import {connect} from 'react-redux';

const TopCharts = ({artist}) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="text-center my-3">{artist.popular.textParagraph}</h2>
        {artist.popular.songs.map(elm => (
          <Item
            key = {elm.id}
            {...elm}
          />
        ))}
      </div>
    </div>
  </div> 
);

const mapStateToProps = (state) => {
  // const show2 = state.AppReducer.show
  const { show } = state.AppReducer
  return {
      artist: show,
  }
}

export default connect(mapStateToProps)(TopCharts);
