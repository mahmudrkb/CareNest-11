import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] =useState()

  const createNewUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const userLogout=()=>{
    setLoading(true)
    return signOut(auth)
}
  const info = {
    user,
    setUser,
    signInWithGoogle,
    createNewUser,
    updateUserProfile,
    userLogout,signIn

  };

  
useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth ,(currentUser)=>{
         setUser(currentUser)
         console.log(currentUser)
         setLoading(false)
     })
     return()=>{
          unsubscribe()
     }
    
 },[])
 

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
