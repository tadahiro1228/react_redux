import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { updateName, updateAge, getApiData } from "../actions/userAction";

class Home extends React.Component {
  handleClick = () => {
    this.props.updateName("foo@Home");
  };
  handleGetApi = () => {
    this.props.getApiData();
  };

  render() {
    console.log(this.props.user);
    return (
      <div>
        <p>Home</p>
        <Link to="/about">About</Link>
        <p>名前:{this.props.user.name}</p>
        <p>年齢:{this.props.user.age}</p>
        <button onClick={this.handleClick}>updateName@Home</button>
        <button onClick={this.handleGetApi}>get data from Api</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = (dispatch) => ({
  updateName: (name) => dispatch(updateName(name)),
  updateAge: (age) => dispatch(updateAge(age)),
  getApiData: () => dispatch(getApiData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
