import React, { Component } from 'react';
import './App.css';
import Box from './Components/Box.js';
import SignIn from './Components/SignIn.js';

import Position from   './Components/Position/Position.js';



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
    }else if (route === 'position'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  render() {
    const { isSignedIn,route } = this.state;
      return (<div className="App">
                  { (route === 'home')
          ? <div>
              <Box onRouteChange={this.onRouteChange}/>
            </div>
            :(route === 'position')
              ? <Position />
              : 
             <SignIn onRouteChange={this.onRouteChange}/>
            
                
              
          }

      </div>
        );
            
        
             
        
      
      

  }
}

export default App;
