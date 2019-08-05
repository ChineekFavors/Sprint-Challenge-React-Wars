import React, {useState, useEffect} from "react";
import axios from 'axios';
import Heading from './heading/Heading.js';
import Height from './height/Height.js';
import Mass from './mass/Mass.js';
import Hair from './hair/Hair.js';
import Skin from './skin/Skin.js';




function StarWarsData(){
	const [data, setData] = useState([])
	

	
	    
	useEffect( () => {
		axios.get('https://swapi.co/api/people/')
			
			.then( res => {
					setData(res.data.results)
			})	
				
			

					
	}, []);

	
	return (
		

	    <div className="starWarsContainer" >
		    {data.map(data => 
		    	<Heading name={data.name} key={data.name} />

		    	)}
		    {data.map( data =>
		    	<Height height={data.height} key={data.height} />

		    	)}
		    {data.map( data =>
		    	<Mass mass={data.mass} key={data.mass} />

		    	)}
		    {data.map( data =>
		    	<Hair hair={data.hair_color} key={data.hair_color} />

		    	)}
		    {data.map( data =>
		    	<Skin skin={data.skin_color} key={data.skin_color} />

		    	)}
	    	
	    </div>
	    	
	);

}
export default StarWarsData;
			


