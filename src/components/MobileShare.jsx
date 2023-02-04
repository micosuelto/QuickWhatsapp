import React from 'react';

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
          console.error('Something went wrong sharing the blog', error);
        });
    }
  };
  
    return (
      <div className='share-icon' onClick={handleOnClick}>
        Share this app
      </div>
    );
  };
  
  export default MobileShare;