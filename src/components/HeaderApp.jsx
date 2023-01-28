import React from 'react';
import "../styles/HeaderApp.scss";

const HeaderApp = () => {
    return ( 
        <header className='HeaderApp'>
            <div className='container'>
                <h1 className='app-name text-3xl font-bold underline'>
                    Quick<span>Whatsapp</span>
                </h1>
                <h2 className='slogan'>
                    Send messages to an unsaved numbers. 
                </h2>
            </div>
        </header>
     );
}
 
export default HeaderApp;