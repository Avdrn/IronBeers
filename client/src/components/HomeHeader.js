import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class HomeHeader extends Component {
  render() {
    return (
      <div>
        <ul>
        <li> <Link to="/beers" >Beers</Link> </li>
          <li> <Link to="/new-beer" >New Beer</Link> </li>
          <li> <Link to="/random-beer" >Random Beer</Link></li>
          {/* <li>Random Beer <Link to={`/New-beer/${beers.id}`} ></Link></li> */}

        </ul>
      
      </div>
    )
  }
}
