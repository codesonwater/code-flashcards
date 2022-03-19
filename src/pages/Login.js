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
      <h1 className='h1'>Please login</h1>
      <button onClick={() => login()}>Login</button>
      <p>Not a user already?</p>
      <button>Signup</button>
    </>
  );
};

export default LoginPage