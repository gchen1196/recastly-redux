import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';


var handleVideoSearch = (q) => {
  return () => {
    searchYouTube(q, (data) => {
      changeVideoList(data);
      changeVideo(data[0]);
    });
  };
};

export default handleVideoSearch;
