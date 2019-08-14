import React, { Component } from 'react'
import axios from 'axios';  

export default class SingleBeer extends Component {
  constructor(){
    super()
    this.state = {
        beer: undefined
    }
  }

  componentDidMount() {
    const {params} = this.props.match;
    const beerId = params._id

    axios.get(`https://ih-beers-api.herokuapp.com/beers/${beerId}`)
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
