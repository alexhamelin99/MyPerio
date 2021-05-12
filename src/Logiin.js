import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';
import ForgotPassword from './ForgotPassword'


const Login = (props) => {
    const {mail,setMail, password,setPassword, handleLogin,handleSignup, hasAccount,sethasAccount,mailError, passwordError}=props;

    return(
        <section>
             <div> 
       
       
        <div>
          {hasAccount?(
            <>
            <div className='Ellipse2'/> 
       <div >
       <span className="AdresseMail"> Adresse Mail </span>
       <input
        type="text" 
       name="name" 
       className="Rectangle87" 
       autoFocus required value={mail}
        onChange={e=> setMail(e.target.value)}
        />

       <p className="errorMsg"> { mailError} </p>


       <span className="MotdePass"> Mot de passe </span>
       <input 
       type="text" 
       name="name" 
       className="Rectangle86"
       autoFocus required value={password} 
       onChange={e=> setPassword(e.target.value)}
         />

         <p className="errorMsg"> {passwordError} </p>
         
       <span className="MotDePasseoublié" style={{cursor: 'pointer'}}>
          <Link to={"/ForgotPassword"} >  Mot de passe oublié </Link>
          
           </span>
       <div className="Radio2"><input type="checkbox" value="Male" name="gender" className="Radio"/> Se souvenir de moi </div>
       
       
       <input type="text" name="name" style={{cursor: 'pointer'}} onClick={handleLogin} className="Rectangle10"/>
        
        <div className="MeConnecter" style={{cursor: 'pointer'}} onClick={handleLogin}>Me connecter</div>
        <div className="Inscrivez_vous" style={{cursor: 'pointer'}}onClick={()=>sethasAccount(!hasAccount)}> Vous n’avez pas encore de compte ? Inscrivez-vous</div>
        </div>
            </>
          ):(
            <>
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

  <div className='Rect' style={{cursor: 'pointer'}}></div>
  <div className='Minscrire' style={{cursor: 'pointer'}} onClick={handleSignup}> M’inscrire</div>
  <div className='connectez_Vous' style={{cursor: 'pointer'}} onClick={()=>sethasAccount(!hasAccount)}> Vous avez déjà un compte ? Connectez-vous </div>
            </>
          )
          }
        </div>
 
       


       </div>
       
       


        </section>
    )
}
export default Login