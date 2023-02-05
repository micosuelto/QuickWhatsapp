import React from 'react';
import '../styles/ShareApp.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";




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
  const { t } = useTranslation();

    return (
      <div className='share-icon' onClick={handleOnClick}>
        <FontAwesomeIcon icon={faShareFromSquare} />
        {t('share')}
      </div>
    );
  };
  
  export default MobileShare;