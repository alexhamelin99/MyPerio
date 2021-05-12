import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase/';

const ForgetPassword =(props)=>{
    const firebase = useContext(FirebaseContext);
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = e => {

        e.preventDefault();

        firebase.passwordReset(email)
        .then(()=>{
            setError(null);
            setSuccess(`Consultez votre email ${email} pour changer le mot de passe`);
            setEmail("");

            setTimeout(() => {
                props.history.push('/Login')
            }, 5000)

        })
        .catch(error=>{
            setError(error);
            setEmail("");

        })
    }
    const disabled = email === "";
    return(
<div>
{ 
                            success && <span 
                                style={{ 
                                border: "1px solid green",
                                background: "green",
                                color: " rgb(233, 108, 108)"
                            }}
                            >
                                {success}
                            </span>
                        }

{error && <span>{error.message}</span>}

<h2 className="MDP_2">Mot de passe oublié?</h2>
          <div className='Ellipse2_0'/> 
          
     <div >
         <form onSubmit={handleSubmit}>
     
     <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required  className="Rectangle87_0"  />
     <label className="AdresseMail2_0"> Adresse Mail </label>


    
     
  
     <button disabled={disabled}  className='Rect_2'>Récupérer</button>
      
      </form>

      <div className="Inscrivez_vous" style={{cursor: 'pointer'}}> <Link to="/Login">Vous avez déjà un compte ? Connectez-vous </Link></div>
      <br/>
      
      </div>
          
         
        </div>
    )
}
export default ForgetPassword