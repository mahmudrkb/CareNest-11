import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
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

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const info = {
    user,
    setUser,
    signInWithGoogle,
    createNewUser,
    updateUserProfile,
    userLogout,
    signIn,
    loading,
    setLoading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state captured", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user,{withCredentials:true})
        .then(res=>{console.log("login token",res.data)
          setLoading(false);
        })
      }else{
        axios.post(`${import.meta.env.VITE_API_URL}/logout`,{},{
          withCredentials:true
        })
        .then(res=>{console.log("logout",res.data)
          setLoading(false);
        })
      }

      
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
