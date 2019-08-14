import React, { Component } from 'react'
import Auth from "../utils/Auth";
const auth = new Auth();

export default class Profile extends Component {
  render() {
    var user = auth.getUser();
    return (
      <div>
        Hello {user}
      </div>
    )
  }
}
