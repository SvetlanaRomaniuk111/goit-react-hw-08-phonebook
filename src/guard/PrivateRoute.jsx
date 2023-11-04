const { useSelector } = require('react-redux');
const { Navigate, useLocation } = require('react-router-dom');

const PrivateRoute = ({ children }) => {
  const { isAuth, isLoading } = useSelector(state => state.auth);
  const { pathname } = useLocation();
  const link = isLoading ? pathname : '/login';
  return isAuth ? children : <Navigate to={link} state={pathname} />;
};
export default PrivateRoute;
