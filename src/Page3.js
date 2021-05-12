import React,{useEffect, useState} from 'react';
import popopo from './piopio.jpg'
import './App.css';
const Page3 = () =>{
    return(
        <div> 
            <span className='hamburger' style={{fontSize: '30px', cursor: 'pointer'}}>☰</span>
            <div className='BonjourDr'> Bonjour, Dr. Utilisateur</div>
            <div className='Rectangle15'></div>
            <div className='Rectangle10_2'></div>
            <div className='Rectangle11'></div>
            <div className='Création_du_profil'>Création du profil</div>
            <div className='Nouvelles_fonctionnalités'>Nouvelles fonctionnalités </div>
            <div className='Découvrez'>Découvrez les nouvelles fonctionnalités de l’application. Vous pouvez désormais contacter vos patients. </div>
            <div className='En_savoir_plus' style={{cursor: 'pointer'}}>En savoir plus</div>
            <div className='selctionner_un_patient'>selctionner un patient</div>
            <div className='En_quelques_clics1'>En quelques clics</div>
            <div className='En_quelques_clics2'>En quelques clics</div>
            <div className='ellipse13'style={{ backgroundImage: `url(${popopo})` }}></div>

        </div>
    )
}
export default Page3;
