import React from 'react';
import List from './ListArtist';
import { connect } from 'react-redux';

const Carrusel = ({artist}) => (
  <div className="my-5">
    <div className="row">
      <div className="col-12 text-right">
        <p className="d-inline-block m-0 p-3">Popular Artist You Make Like</p>
      </div>
    </div>
    <List data = {artist}/>
  </div>
);

const mapStateToProps = (state) => {
  // const show2 = state.AppReducer.show
  const { show } = state.AppReducer
  return {
      artist: show,
  }
}

export default connect(mapStateToProps)(Carrusel);
