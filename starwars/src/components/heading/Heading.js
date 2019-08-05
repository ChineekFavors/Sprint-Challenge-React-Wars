import React,{useState} from "react";


function Heading(props){
 const name = props.name


  return (

    <div className="heading">
    	<h3>Name: {name}</h3>
      
    </div>
  );
}
export default Heading;