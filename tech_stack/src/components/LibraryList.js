import React, { Component } from 'react';
import { connect } from 'react-redux';

//connect helper helps to get access to the application state inside of given components
class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

//purpose of this function is basically to mapStateToProps!
//it takes global state object and map it/provide them as props to our component of LibraryList
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//it calls the function connect
//when connect its called it returns another fucntion
//we immediatly call that return LibraryList function

export default connect()(LibraryList);
