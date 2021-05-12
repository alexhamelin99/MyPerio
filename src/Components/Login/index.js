import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'



const Login = (props) => {

    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email,btn])
    const handleSubmit = e => {
        e.preventDefault();
        firebase.loginUser(email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            props.history.push('/Welcome');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
    }

    return(
        
        <div>
          
            <div className='Ellipse2'/> 
            {error !== '' && <span>{error.message}</span>}
       <div >
           <form onSubmit={handleSubmit}>
       
       <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required  className="Rectangle87"  />
       <label className="AdresseMail"> Adresse Mail </label>

  
      
       <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required className="Rectangle86"/>
       <label className="MotdePass"> Mot de passe </label>

        
         
       <span className="MotDePasseoublié" style={{cursor: 'pointer'}}>  </span>
       
       
    
        
        
        {btn ? <button className="MeConnecter" style={{cursor: 'pointer'}} className="Rectangle10"> Me connecter</button> : <button className="MeConnecter" style={{cursor: 'pointer'}} className="Rectangle10" disabled> Me connecter</button> }
        </form>

        <div className="Inscrivez_vous" style={{cursor: 'pointer'}}> <Link to="/Signup">Vous n’avez pas encore de compte ? Inscrivez-vous </Link></div>
        
        <span className="MotDePasseoublié" style={{cursor: 'pointer'}}>
          <Link to={"/forgetPassword"} >  Mot de passe oublié </Link>
           </span>

       
        </div>
            
           
          </div>


       
       


      
    )
}
export default Login