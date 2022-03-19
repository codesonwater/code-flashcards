import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
    
  export const UserContext = createContext({});
  
  export const UserContextProvider = ({children}) => {
    const auth = getAuth();
    const [user, setUser] = useState(!auth.currentUser);
    const [loaded, setLoaded] = useState(false);
    const value = { user, setUser } ;
    const { Provider } = UserContext;
    useEffect(() => {
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        setLoaded(true);
      });
    }, [auth]);
  
    if (!loaded) {
      return <>
                <div className={"loader"} style={{marginTop: "10em"}}>
                </div>
                <h2>Loading...</h2>
            </>;
    }
  
    return <Provider value={value}>{children}</Provider>;
  };
  