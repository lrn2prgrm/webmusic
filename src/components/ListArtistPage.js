import React from 'react';
import {connect} from 'react-redux';
import { activeArtist } from '../actions/actions';

const ListArtist = ({name, id, active2}) => (
  <a className="list-group-item list-group-item-action" data-toggle="list" href="#list-home" role="tab" aria-controls="home" id={id} onClick={() => active2(id)}>{name}</a>
);

const mapDispatchToProps = (dispatch) => ({
  active2: (id) => dispatch(activeArtist(id))  
})

export default  connect(null, mapDispatchToProps)(ListArtist);