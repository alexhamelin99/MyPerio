import React, { useState, useContext, useEffect,Fragment } from 'react'
import { FirebaseContext } from '../Firebase'
import Logout from '../Logout'
const Welcome =(props)=> {
    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
    })
    return ()=>{
        listener()
    };
},[])
    return userSession === null?(
        <Fragment>
            <div> loading...</div>
        </Fragment>
    ):(
        <div>
        <Logout/>
        
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
            <div className='ellipse13'></div>
            </div>

    

    )

}
export default Welcome