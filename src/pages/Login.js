import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

function LoginPage () {
  const { isLightTheme} =useContext(ThemeContext);
  const { setUser } = useContext(UserContext);
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

  return (
    <html className={isLightTheme ? '': 'dark-bg'}>
      <h1 style={{marginTop: "10%"}} className='h1'>{ "{ Please Login }" }</h1>
      <button className='button' onClick={() => login()}>Login</button>
    </html>
  );
};

export default LoginPage