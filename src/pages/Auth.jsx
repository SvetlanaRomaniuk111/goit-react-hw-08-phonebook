import { Box } from '@mui/material';
import LoginForm from 'components/Forms/Login/LoginForm';
import RegistrateForm from 'components/Forms/Registrate/RegistrateForm';
import { NavLink, useLocation } from 'react-router-dom';

const Auth = () => {
  const { pathname } = useLocation();
  switch (pathname) {
    case '/login':
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <LoginForm />
          <span className="span">
            Doesn't have account <NavLink to="/registrate">Registrate</NavLink>
          </span>
        </Box>
      );
    case '/registrate':
      return (
        <Box>
          <RegistrateForm />
          <span className="span">
            Aready have account <NavLink to="/login">Login</NavLink>
          </span>
        </Box>
      );
    default:
      break; //or redirect on 404 page
  }
};

export default Auth;
