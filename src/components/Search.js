import React from 'react';
import {connect} from 'react-redux';
import {search} from '../actions/search.js';

const Search = ({handleSearchInputChange}) => ( 
// class Search extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: ''
  //   };
  // }

  // handleInputChange(e) {
  //   this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }
//debugger;
  //render() {
  // return (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      /*value={this.state.value}*/
      onChange={(e) => handleSearchInputChange(e.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
  // );
  //}
);

//var handleInputChange = (e) => {e.target.value};

export default Search;

