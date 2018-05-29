import React from 'react';
import ListRecommended from './ListRecommended';
import { connect } from 'react-redux';

const Recommended = ({artist}) => (
  <div className="container">
    <div className="row">
    <div className="col-12 text-center">
      <h2 className="m-0 p-3">Recommended for you</h2>
    </div>
    {artist.recommended.songs.map(elm => (
      <ListRecommended 
        key = {elm.id}
        {...elm}
      />
    ))}
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

export default connect(mapStateToProps)(Recommended);