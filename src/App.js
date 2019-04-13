import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box.js';
import SignIn from './Components/SignIn.js';
import Navigation from './Components/Navigation';



class App extends Component {
constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      }
    }

onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  render() {
    const { isSignedIn,route } = this.state;
    return (
      <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      { route === 'home'
          ? <div><Box />
              </div>
          : 
            <SignIn onRouteChange={this.onRouteChange}/>
             
        }
      
      
       
             </div>
    );
  }
}

export default App;
