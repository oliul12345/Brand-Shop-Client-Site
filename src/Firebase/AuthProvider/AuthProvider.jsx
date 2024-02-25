/* eslint-disable react/prop-types */
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FirebaseConfig/FirebaseConfig";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
       
    }

    const logOut = () =>{
        // return signOut(auth)
        setLoading(true)
      return  signOut(auth)
    }

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const updateProfileImage = (name,photo)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, {
        displayName:name,
        photoURL:photo
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return() => {
            unSubscribe()
        }
       
    },[])

    const userInfo = {
        user,
        createUser,
        logInUser,
        logOut,
        loading,
        signInGoogle,
        updateProfileImage
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;