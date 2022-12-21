import {
  Navigate,
  Outlet,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

const RequireAuth = ({ allowedRoles }) => {
  const roles = JSON.parse(localStorage.getItem('user-info'))?.userId.split(
    '-'
  )[0];

  const location = useLocation();
  const [searchParams] = useSearchParams();
  const params = [];

  searchParams.forEach((key, value) => {
    params.push([key, value]);
  });

  return roles === allowedRoles ? (
    <Outlet />
  ) : roles ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate
      to={'/login'}
      state={{ from: location, params: params }}
      replace
    />
  );
};

export default RequireAuth;
