import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContext';

function LoginPage () {
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
    <>
      <button onClick={() => login()}>Login</button>
      <h1 className='h1'>hello world</h1>
    </>
  );
};

export default LoginPage