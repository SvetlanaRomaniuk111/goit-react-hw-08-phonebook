const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');

const PublicRoute = ({ children }) => {
  const { isAuth } = useSelector(state => state.auth);
  return !isAuth ? children : <Navigate to={'/contacts'} />;
};
export default PublicRoute;
