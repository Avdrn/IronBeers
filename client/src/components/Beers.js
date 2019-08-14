import React, { Component } from 'react'
import HomeHeader from './HomeHeader'
import axios from 'axios';  
import {Link} from "react-router-dom";




export default class Beers extends Component {
  constructor(){
    super()
    this.state = {
        beers: undefined
    }
  }

  componentDidMount() {
    axios.get("https://ih-beers-api.herokuapp.com/beers")
    .then(response => {
      this.setState({beers: response.data})
    })
  }

  render() {
    
      return (
        <div>
          {this.state.beers ?
          <>
          {this.state.beers.map((beersArray) => {
            return (
            <Link to={`/${beersArray._id}`} >
                <div>
                  <h3>{beersArray.name}</h3>
                  <img src={beersArray.image_url} alt="beersImg"/>
                </div>
            </Link> 
            )
          })}
          </>
          : null}

        </div>
      )
  }
  
}