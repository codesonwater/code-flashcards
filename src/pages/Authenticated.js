import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContext';

function AuthenticatedPage () {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const logout = () => {
    signOut(auth).then(() => navigate('/'));
  };

  const makeAuthenticatedRequest = () => {
    user
      ?.getIdToken()
      .then((jwt) => {
        return fetch('https://code-flashcards.uc.r.appspot.com/', {
          method: 'GET',
          headers: {
            Authorization: jwt,
          },
        });
      })
      .then((ret) => console.log(ret));
  };

  return (
    <>
      <h1>Authenticated Page</h1>
      <button onClick={() => makeAuthenticatedRequest()}>
        Make Authenticated Request
      </button>
      <button onClick={() => logout()}>Sign Out</button>
    </>
  );
};

export default AuthenticatedPage