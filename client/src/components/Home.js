import React, { Component } from 'react'
import { Link } from 'react-router-dom'




export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/beers" >
          <img src="./img/beers.png" alt="beersImage" /> 
          <h1>All Beers</h1>
          <p>Lorem ipsum dolor sit amet, nonumy prompta nominavi est an, quo in nulla officiis, nostro aliquip volutpat cu qui. Ad usu purto menandri disputando. Quo quem labores temporibus te, timeam meliore senserit vix id. Nulla partem facete ex vis.
          </p>
        </Link>

        <Link to="/new-beer" >
          <img src="./img/new-beer.png" alt="newBeerImage" /> 
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet, nonumy prompta nominavi est an, quo in nulla officiis, nostro aliquip volutpat cu qui. Ad usu purto menandri disputando. Quo quem labores temporibus te, timeam meliore senserit vix id. Nulla partem facete ex vis.
          </p>
        </Link>

        <Link to="/random-beer" >
          <img src="./img/random-beer.png" alt="randomBeersImage" /> 
          <h1>Random Beers</h1>
          <p>Lorem ipsum dolor sit amet, nonumy prompta nominavi est an, quo in nulla officiis, nostro aliquip volutpat cu qui. Ad usu purto menandri disputando. Quo quem labores temporibus te, timeam meliore senserit vix id. Nulla partem facete ex vis.
          </p>
        </Link>
      </div>
    )
  }
}
