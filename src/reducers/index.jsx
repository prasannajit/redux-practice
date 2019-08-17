import {combineReducers} from 'redux';

const songsReducer = ()=>{
    return [
        {
            title:'macarena',
            duration:'5:30'
        },
        {
            title:'i want it that way',
            duration:'4:30'
        },
        {
            title:'barbie girl',
            duration:'3:30'
        },
        {
            title:'dont like me',
            duration:'2:45'
        }
    ]
};

const selectedSongReducer = (selectedSong=null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})