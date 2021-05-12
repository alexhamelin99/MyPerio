import React,{useEffect, useState} from 'react';
import './App.css';
const Page2 = (props) =>{
    const {mail,setMail, password,setPassword, handleLogin,handleSignup, hasAccount,sethasAccount,mailError, passwordError}=props;
    const btn = {mail} ==='' || {password} ===''
    ?<button disabled  > M’inscrire</button>: <button  disabled  >papapappa</button>
    return(
        <div>
  
  <div className='Ellipse2'/> 
  <div className='N°RPPS'>N° RPPS </div>
  <input type="text" className='Rectangle85_2'/>  
  <div className='Mot_de_Passe'> Mot de passe</div>

  <input
   type="text" 
   name="name" 
   className='Rectangle86_2'
   autoFocus required value={password} 
       onChange={e=> setPassword(e.target.value)}
   
   /> 

<p className="errorMsg"> {passwordError} </p>

  <div className='confirmezMDP'>Confirmez le mot de passe </div>
  <input type="text" className='Rectangle87_2'/>
  <div className='AdresseMail_2'> Adresse mail  </div>

  <input 
  type="text" 
  name="name" 
  className='Rectangle88_2'
  autoFocus required value={mail}
  onChange={e=> setMail(e.target.value)}
  />
  <p className="errorMsg"> { mailError} </p>

  {btn}
  </div>
    )
}
export default Page2;