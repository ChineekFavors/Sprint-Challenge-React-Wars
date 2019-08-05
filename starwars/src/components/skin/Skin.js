import React from "react";


function Skin(props){
 const skin = props.skin;


  return (
    <div className="skin">
    	<h3>Skin: {skin}</h3>
      
    </div>
  );
}
export default Skin;