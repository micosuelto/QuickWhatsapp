import React from 'react';
import "../styles/HeaderApp.scss";

const HeaderApp = () => {
    return ( 
        <header className='HeaderApp'>
            <div className='container'>
                <div className='app-title'>
                <h1 className='app-name text-3xl font-bold underline'>
                    Quick<span>Whatsapp</span>
                </h1>
                <h2 className='slogan'>
                    Chat with unsaved numbers. 
                </h2>
                </div>

            
            </div>
        </header>
     );
}
 
export default HeaderApp;