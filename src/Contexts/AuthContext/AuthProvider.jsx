import React from 'react';
import { createContext } from 'react';
import app from '../../FIrebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app);
    
    
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    

    const SignUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
    const updateUser = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,photoURL:photo
          })
    }
   const forgetPassword = (email)=>{
    setLoading(true)
    return sendPasswordResetEmail(auth,email)
   }
    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth,currentUser=>{
             setUser(currentUser)
             setLoading(false)
        })
        return ()=> unscribe()
    },[])

    const googleProvider = new GoogleAuthProvider();

    const GoogleUser = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const AuthInfo = {
        user,
        loading,
        createUser,
        SignUser,
        GoogleUser,
        logOut,
        forgetPassword,
        updateUser

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;