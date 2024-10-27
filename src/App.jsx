
import {createContext, useEffect, useState} from "react";
import { BrowserRouter,  } from 'react-router-dom';
import {  auth } from '../firebase/firebaseConfig.jsx';
import './App.css'
import {onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";



const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  return onAuthStateChanged(auth, (user) =>{
    setUser(user)
    setLoading(false)
  })
}, []);

if(loading) return <div>Loading...</div>

  return (
      <AuthContext.Provider value={{user}}>
        {children}
      </AuthContext.Provider>
  )

}
function App() {



  return (
    <BrowserRouter>
        <AuthProvider></AuthProvider>

    </BrowserRouter>
  )
}

export default App
