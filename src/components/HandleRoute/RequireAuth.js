import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Navigate,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { fetchUser, getUser } from '../../features/user/userSlice';

const RequireAuth = ({ allowedRoles }) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('user-info'))?.token;
  const email = JSON.parse(localStorage.getItem('user-info'))?.email;

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const params = [];

  searchParams.forEach((key, value) => {
    params.push([key, value]);
  });

  console.log(user);

  return token !== undefined ? (
    <Outlet />
  ) : (
    <Navigate
      to={'/login'}
      state={{ from: location, params: params }}
      replace
    />
  );
};

export default RequireAuth;
