import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(true);
  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const registerwithgoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const loginuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = () => {
    return signOut(auth);
  };
  const updateprofilr = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authinfo = {
    user,
    createuser,
    registerwithgoogle,
    loginuser,
    signout,
    updateprofilr,
    loading,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
