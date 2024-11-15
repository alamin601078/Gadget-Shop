import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase-config/firebase";
export const AuthContext = createContext(null);

const auth = getAuth(app)

const gooleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ( {children}) => {

    const [user,setUser] = useState(null);
    // console.log(user)
    
    const [loading, setLoading] = useState(true)
   
    const createUser =(email, password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
    }
    const sinInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //goole singin
    const gooleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, gooleProvider)
    }
    //github sinIn
    const githubSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

     //logUot
     const logOut = () => {
        setUser(null)
        signOut(auth)
    }


    const allvalue = {
        createUser,
        githubSingIn,
        gooleSingIn,
        sinInUser,
        logOut,
        loading,
        user,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user && user?.email) {
                setUser(user)
                setLoading(false)
            } 
        });
        return () => unsubscribe();
    },[])
    return (
        <AuthContext.Provider value={allvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;