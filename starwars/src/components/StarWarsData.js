import React, {useState, useEffect} from 'react';
import axios from 'axios';



function StarWarsData() {
	const [data, setData] = useState();

	// useEffect( () => {
	// 	axios.get('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
	// 	.then( res => {
	// 		setTitle(res.data.title);
			
	// 	})
		
	// }, []);

	return (
	    <div className="starWarsData">
	      <h1>right</h1>
	    </div>
	);    


}


export default StarWarsData;