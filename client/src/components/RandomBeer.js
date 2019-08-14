import React, { Component } from 'react'
import axios from 'axios';  

export default class RandomBeer extends Component {
  constructor(){
    super()
    this.state = {
        beer: undefined
    }
  }

  componentDidMount() {
   
    axios.get(`https://ih-beers-api.herokuapp.com/beers/random`)
    .then(response => {
      this.setState({beer: response.data})
    })
  }

  render() {
    return(
    <div>
       {this.state.beer ?
          <>
          <h1>Hello</h1>
          <h1>{this.state.beer.name}</h1>
          <img src={this.state.beer.image_url} alt="beersImg"/>
          </>
          : null}
    </div>
    )
  }
}
