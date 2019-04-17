import React, {Component} from 'react' ;
import './Location.css';
import AutoCompleteText from './AutoCompleteText.js';
import places from './place.js';


class Location extends Component {

   render() {
      const {onRouteChange } = this.props;
      return(
        <div className = 'tc'>
        <h1 className='white'>View Candidates</h1>       
         <div className = "App-Component">
         <AutoCompleteText items = {places} />
         </div>
        </div>

        );
    }

}

export default Location;