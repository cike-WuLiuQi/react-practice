import React, { Component } from "react";

class UserDetail extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.location.state && this.props.location.state.user.username}
      </div>
    );
  }
}

export default UserDetail;
