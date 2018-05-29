import React from 'react';
import Top from './Top';
import Carrusel from './Carrusel';
import { connect } from 'react-redux';

const Main = ({artist}) => (
  <main className="container">
    <Carrusel />
    <div className="row">
      <Top data = {artist.popular}/>
      <Top data = {artist.recommended}/>
    </div>
  </main>
);

const mapStateToProps = (state) => {
  // const show2 = state.AppReducer.show
  const { show } = state.AppReducer
  return {
      artist: show,
  }
}

export default connect(mapStateToProps)(Main);