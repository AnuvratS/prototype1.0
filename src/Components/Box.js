import React from 'react';
import './Box.css';
import 'tachyons';



const Box = ({onRouteChange}) => {
  return (<div className = "box">
    <div className="split left background">
  <div className="centered">
    
    <h2 className = "white ">View Candidates</h2>
    <h1>👤</h1>
    <input
                onClick = {() => onRouteChange('position')}
                className="white ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="by Position"
              />
  </div>
</div>

<div className="split right">
  <div className="centered">
    
    <h2>View Candidates</h2>
     <h1> 📍</h1>

     <input
                
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="by Location"
              />
  </div>
</div>
</div>
  );
}

export default Box;