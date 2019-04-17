import React, {Component} from 'react' ;
import './Location.css';
import AutoCompleteText from './AutoCompleteText.js';
import places from './place.js';
import MapContainer from './GoogleMap.js';


class Location extends Component {

   render() {
      const {onRouteChange } = this.props;
      return(
        <div className = 'tc'>
        <h1 className='white'>View Candidates</h1>   
        <h3 className='white'>Search by Constituency</h3>    
         <div className = "App-Component">
         <AutoCompleteText items = {places} />
         <h3 className='white'>Or you can</h3>
          <h3 className='white'>Search by your current Location</h3>    
         </div>
         <div className = "Map">
         <MapContainer  />
         </div>
        </div>

        );
    }

}

export default Location;