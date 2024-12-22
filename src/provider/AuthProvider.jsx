import { createContext, useState } from "react";
import { app } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const info = {
    user,
    setUser,
    signInWithGoogle,
    createNewUser,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
