import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        {title: 'No scrubs', duration:'4:05'},
        {title: 'Macarena', duration:'2:30'},
        {title: 'All star', duration:'3:15'},
        {title: 'I want it that way', duration:':45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type == 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    song: songReducer,
    selectedSong: selectedSongReducer
});