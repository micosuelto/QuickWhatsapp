import React from 'react';
import '../styles/ShareApp.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";




const MobileShare = () => {
  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `QuickWhatsapp`,
          text: `Chat with unsaved contacts.`,
          url: document.location.href,
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the App', error);
        });
    }
  };
  
    return (
      <div className='share-icon' onClick={handleOnClick}>
        <FontAwesomeIcon icon={faShareNodes} />
        Share this app
      </div>
    );
  };
  
  export default MobileShare;