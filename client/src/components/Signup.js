import React, { Component } from 'react';
import Auth from "../utils/Auth";
const auth = new Auth();


class Signup extends Component {
  constructor(props){
    super(props)

    this.state = { 
      user:{
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
      }
    }
  
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleFormChange = (e)=> {
    let user = {...this.state.user}
    user[e.target.name] = e.target.value
    this.setState({ 
        user:user// within the square brackets "[]" you can use dynamic keys
    })
  }

  handleFormSubmit = (e)=> {
    e.preventDefault();
    auth.signup(this.state.user)
        .then(()=> {
            this.setState({error: ""})
            this.props.history.push("/")
        })
        .catch(({response})=> {
            this.setState({error: response.data.message})
        })
  }

  render(){
     return (
      <div>
        <form onSubmit={this.handleFormSubmit}> 
            <div>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Username" value={this.state.user.username} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" placeholder="password" checked={this.state.user.password} onChange={this.handleFormChange} />{/* reacts wants to be in charge of all the data   */}
            </div>
    ​            
            <div>
                <label>Firstname:</label>
                <input type="text" name="firstname" placeholder="firstname" value={this.state.user.firstname} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
            </div>
            <div>
                <label>Lastname:</label>
                <input type="text" name="lastname" placeholder="lastname" value={this.state.user.lastname} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
            </div>
            
            <div>
                <label>email:</label>
                <input type="text" name="email" placeholder="email" value={this.state.user.email} onChange={this.handleFormChange} /> {/* reacts wants to be in charge of all the data   */}
            </div>
    ​
            <div>
              <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
    )
  }
}

export default Signup