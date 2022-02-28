import React, {useState} from 'react';

import './Location.css';

const Location = (props) => {
    function removeLocation( id ) {
        console.log(id);
      } 

	return (
		<ul>
            <li>{ props.lat }, { props.lng } <button onClick={() => removeLocation( )}>Remove</button></li>
        </ul>
	);
};

export default Location;
