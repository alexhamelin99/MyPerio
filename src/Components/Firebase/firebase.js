import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBKLT3yUcTsoMm4NRdbXoQnpLH7B3Tp6_g",
    authDomain: "projet1-fb381.firebaseapp.com",
    projectId: "projet1-fb381",
    storageBucket: "projet1-fb381.appspot.com",
    messagingSenderId: "1063690052724",
    appId: "1:1063690052724:web:59aee096e211624508dd21"
  };
  // Initialize Firebase
  class Firebase {
    constructor() {
      app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }
    // inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    // Connexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password);

    // Déconnexion
    signoutUser = () => this.auth.signOut();

    // Récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email); 
    
    
  }
  export default Firebase;