import axios from 'axios';

const KEY = 'AIzaSyDHaKXtVEqypOrVxMwGqgXA3gxT-34Nqwo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});