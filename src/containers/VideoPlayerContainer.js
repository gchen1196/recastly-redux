import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


var mapStateToProps = (state) => ({
  video: state.currentVideo
});
  
const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (q) => dispatch(changeVideo(q)) 
  };
};
  
  
var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
