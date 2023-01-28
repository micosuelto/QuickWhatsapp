import React from 'react';
import '../styles/NotFound.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
    return ( 
        <div className='page404'>
            <FontAwesomeIcon icon={faXmark} size="3x"/>
            <h2>Page not found.</h2>
            <p>
                <a href="/">Back to home</a>.
            </p>
        </div>
     );
}
 
export default NotFound;
