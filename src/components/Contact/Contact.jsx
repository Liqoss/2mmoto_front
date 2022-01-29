import React from 'react';
import './contact.css';
import facade from '../../assets/facade.png';

const Contact = () => {

    return(
        <div id='contact'>
            <img src={facade} id='facade' alt='façade de la boutique'></img>
            <ul id='infoContact'>
                <li>Adresse : 4 avenue du Canadiens, Le Tréport, France</li>
                <li>Téléphone : 02 35 86 57 10</li>
            </ul>
            <div id='map'></div>
        </div>
    )
}

export default Contact;