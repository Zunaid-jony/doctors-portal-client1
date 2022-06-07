
import initializeFirebase from './../Home/Login/Firebase/firebase.init';
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut,onAuthStateChanged,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,updateProfile} from "firebase/auth";
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading]= useState(true)
    const [ authError, setAuthError] = useState('');

    //
    const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    //google 
    const googleProvider = new GoogleAuthProvider();

    const registerUser =( email, password,name ,history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
           setAuthError('');
           const newUser = {email, displayName: name}
           setUser(newUser);
           // save user to the database
           saveUser(email, name , 'POST');

           //send name to firebase after creation
           updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          const destination = history?.state?.from || '/';
          history(destination, {replace: true});
           //history.replace('/')
            // ...
          })
          .catch((error) => {
           
            setAuthError(error.message);
            // ..
          })
          .finally(()=> setIsLoading(false));
    }


    const logout =() =>{
        setIsLoading(true);
        signOut(auth).then((data) => {
            console.log("🚀 ~ file: useFirebase.js ~ line 34 ~ signOut ~ data", data)
            // Sign-out successful.
          }).catch((error) => {
            console.log("🚀 ~ file: useFirebase.js ~ line 37 ~ signOut ~ error", error)
            // An error happened.
          })
          .finally(()=> setIsLoading(false))

    }

    //log

   const loginUser =(email, password , location, history)=>{
     console.log( "From useFirebase: ", {location}, {history})
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //login to home page state
      const destination = location?.state?.from || '/';
      history(destination, {replace: true});
      setAuthError('');
        // ...
      })
      .catch((error) => {
      
        setAuthError(error.message);
      })
      .finally(()=> setIsLoading(false));
       
   }
   // google login
    const signInWithGoogle = (location,history) =>{
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
  .then((result) => {
    //google - to home pages
    const destination = history?.state?.from || '/';
    history(destination, {replace: true});
    
    const user = result.user;
    saveUser()
    // setAuthError(user.email, user.displayName, 'PUT');
    // ...
  }).catch((error) => {
    setAuthError(error.message);
   
  }).finally(()=> setIsLoading(false));

    }  
     

    // user start change insformaions
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
             
            //   const uid = user.uid;
              setUser(user);
              // ...
            } else {
                setUser({})
             
            }
            setIsLoading(false);
          });
          return () => unsubscribe;


    },[]);

    useEffect(()=>{

      fetch(`https://ancient-island-03613.herokuapp.com/users/${user.email}`)
      .then(response => response.json())
      .then(data => setAdmin(data.admin))
    },[user.email])



    const saveUser =(email, displayName , method)=>{
      const user ={email, displayName};
      fetch('https://ancient-island-03613.herokuapp.com/users',{
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      
      })
      .then();

    }
    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        logout,
        signInWithGoogle,
        loginUser,
    }
   
};

export default useFirebase;