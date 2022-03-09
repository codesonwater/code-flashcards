// import { createContext, useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
    
//   export const UserContext = createContext({});
  
//   export const UserContextProvider = ({children}) => {
//     const auth = getAuth();
//     const [user, setUser] = useState(!auth.currentUser);
//     const [loaded, setLoaded] = useState(false);
//     const value = { user, setUser } ;
//     const { Provider } = UserContext;
//     useEffect(() => {
//       onAuthStateChanged(auth, (u) => {
//         setUser(u);
//         setLoaded(true);
//       });
//     }, [auth]);
  
//     if (!loaded) {
//       return <></>; // put a spinner or loading screen here between the fragment
//     }
  
//     return <Provider value={value}>{children}</Provider>;
//   };
  