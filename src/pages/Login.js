import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

function LoginPage () {
  const { isLightTheme} =useContext(ThemeContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
 
  useEffect(() =>{
    const localUser = localStorage.getItem("displayName");
    if (localUser) setUser(localUser);
  }, []);
  
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const logout = () => {
    signOut(auth).then(navigate("/"));
    localStorage.clear();
  };

  return (
    <html className={isLightTheme ? '': 'dark-bg'}>
      <h1 style={{marginTop: "10%"}} className='h1'>{ "{ Please Login }" }</h1>
      {!user
        ? <button type="button" class="login-with-google-btn" onClick={() => login()}>
        Sign in with Google
        </button>
        : <button type="button" class="button" onClick={() => logout()}>
        Sign Out
        </button> 
      }
     
    </html>
  );
};

export default LoginPage