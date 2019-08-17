import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song})=>{
    if(!song) {
        return <div>Select A song</div>
    }
    return <div>
        <h3>Details For: </h3>
        <p>Song Title: {song.title}</p>
        <p>Song duration: {song.duration}</p>
        </div>
};

const mapStateToProps = (state)=>{
    return {song: state.selectedSong};
};
export default connect(mapStateToProps)(SongDetail);