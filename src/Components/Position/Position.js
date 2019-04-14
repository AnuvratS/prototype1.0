import React, {Component} from 'react' ;
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import Scroll from './Scroll';

class Position extends Component {
   constructor() {
   	super()
   	this.state ={
   		robots: robots,
   		searchfield: ''
   	}
   }

   componentDidMount(){
   	fetch('https://jsonplaceholder.typicode.com/users')
   	.then(response => response.json())
   	.then(users => {this.state({robots})});
   }

   onSearchChange = (event) => {
   	this.setState({searchfield: event.target.value})
   }

   render() {
      const {onRouteChange } = this.props;
   	  const filteredRobots = this.state.robots.filter(robots =>{
   	  	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   	  })
   	  if(this.state.robots.length === 0){
   	  	return <h1>Loading..</h1>
   	  } else{
   	  return(
   	  	<div className = 'tc'>
   	  	<h1 className='white'>View Candidates</h1>
         <h2 className = 'white'>By Position</h2>
   	  	<SearchBox searchChange = {this.onSearchChange}/>
   	  	<Scroll>
   	  	<CardList robots = {filteredRobots} />
   	  	</Scroll>
   	  	</div>

   	  	);
   	}

   }
}

export default Position;