import React from 'react';
import ListArtist from './ListArtistPage';
import { connect } from 'react-redux';

const Artist = ({artist, artistActive}) => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="text-center">List Artist</h2>
      </div>
      <div className="col-12 col-md-3">
        <div className="list-group" id="list-tab" role="tablist">
          {artist.list.map(elm => (
            <ListArtist
              key = {elm.id}
              {...elm}
            />
          ))}
        </div>
      </div>
      <div className="col-12 col-md-9">
        {artistActive.map((val) => {
          if(val !== undefined) {
            return (
              <div className="row">
                <div className="col-12 col-md-9">
                  <img src={val.image} alt={val.name} className="img-fluid rounded"/>
                </div>
                <div className="col-12 col-md-3">
                  <h3>{val.name}</h3>
                  <p>{val.biography}</p>
                  <ul>
                    {val.songs.map((elm, i) => (
                      <li key={elm.id}>{elm}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          }
          else return null;
        })}
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  // const show2 = state.AppReducer.show
  const { show, activeArtist } = state.AppReducer
  return {
      artist: show,
      artistActive: activeArtist
  }
}

export default connect(mapStateToProps)(Artist);