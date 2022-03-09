// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router';
// import { UserContext } from '../context/UserContext';

// function LoginPage () {
//   const { setUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   const auth = getAuth();
//   const provider = new GoogleAuthProvider();
//   const login = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         setUser(result.user);
//         navigate('/authenticated');
//       })
//       .catch((error) => alert(error.message));
//   };

//   return (
//     <>
//       <button onClick={() => login()}>Login</button>
//     </>
//   );
// };

// export default LoginPage