import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'

const Signup =(props)=> {

  const firebase = useContext(FirebaseContext);
  
  const data = {
    NRPPS: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const [loginData, setLoginData] = useState(data);
const [error, setError] = useState('')

const handleChange = e => {
  setLoginData({...loginData, [e.target.id]: e.target.value});
}


const handleSubmit = e => {
  e.preventDefault();
  const { email, password,NRPPS } = loginData;
  firebase.signupUser(email, password)
  .then(() => {
      setLoginData({...data});
      props.history.push('/Welcome');
  })
  .catch(error => {
      setError(error);
      setLoginData({...data});
  })
 
}

const { NRPPS, email, password, confirmPassword } = loginData;



const btn = NRPPS === '' || email === '' || password === '' || password !== confirmPassword 
    ? <button className='Rect' disabled>M’inscrire</button> : <button className='Rect'> M’inscrire</button>

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;
    return(
    <div>
    <div className='Ellipse2'/> 
    {errorMsg}
    <form onSubmit={handleSubmit}>
      <div>

  <input type="text"  id="NRPPS" className='Rectangle85_2' autoComplete="off" required onChange={handleChange} value={NRPPS}/>  
  <label className='N°RPPS' htmlFor=" NRPPS ">N° RPPS </label>

  
 <input type="password" id="password" className='Rectangle86_2' autoComplete="off" required onChange={handleChange} value={password}/> 
 
 <label className='Mot_de_Passe' htmlFor="password"> Mot de passe</label>


 <input type="password" className='Rectangle87_2' id="confirmPassword" autoComplete="off" required onChange={handleChange} value={confirmPassword}/>
  <label className='confirmezMDP' htmlFor="confirmPassword">Confirmez le mot de passe </label>
  
  
  <input  className='Rectangle88_2' type="email" id="email" autoComplete="off" required  onChange={handleChange} value={email}/>
 <label className='AdresseMail_2' htmlFor="email"> Adresse mail  </label>
 </div>


 {btn}
  
  </form>
        
  <Link to="/Login" className='connectez_Vous'>Vous avez déjà un compte ? Connectez-vous  </Link>
    </div>)

}
export default Signup