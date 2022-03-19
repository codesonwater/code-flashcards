import { useContext } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../context/UserContext';

function GuestRoute ({ children }) {
  const { user } = useContext(UserContext);
  return !user ? <Navigate to="/authenticated" replace /> : children;
};

export default GuestRoute