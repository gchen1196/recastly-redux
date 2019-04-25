import React from 'react';
import {connect} from 'react-redux';
import {search} from '../actions/search.js';

 
class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.getYouTubeVideos(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    videos: state.videos,
    currentVideo: state.video,
    value: state.value
  };
};

//And then we need another function to be 
//able to dispatch our search() action creator with a prop.

//dispatching of action creators to props
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch(search(state.value));
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);
