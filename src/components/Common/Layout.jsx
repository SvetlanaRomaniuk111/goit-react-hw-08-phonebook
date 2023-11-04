import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import { logoutThunk } from 'store/auth/actions';
import Typography from '@mui/material/Typography';
export const Layout = () => {
  const auth = useSelector(state => state.auth);
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <AppBar position="static" component="nav">
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={2}
              width="100%"
            >
              <Box>
                <NavLink to="/">
                  {({ isActive }) =>
                    isActive ? (
                      <Button sx={{ color: '#FF6550' }}>Home</Button>
                    ) : (
                      <Button sx={{ color: '#fff' }}>Home</Button>
                    )
                  }
                </NavLink>
                {auth.isAuth ? (
                  <NavLink to="/contacts">
                    {({ isActive }) =>
                      isActive ? (
                        <Button sx={{ color: '#FF6550' }}>Contacts</Button>
                      ) : (
                        <Button sx={{ color: '#fff' }}>Contacts</Button>
                      )
                    }
                  </NavLink>
                ) : null}
              </Box>

              <Box>
                <UserMenu auth={auth} pathname={pathname} />
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

const UserMenu = ({ auth, pathname }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <>
      {auth.isAuth ? (
        <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Typography>Welcome {auth.name}</Typography>
            <Button onClick={handleLogout} variant="contained" type="button">
              LOG OUT
            </Button>
          </Box>
        </>
      ) : (
        <NavLink to="login">
          {({ isActive }) =>
            isActive ? (
              <Button sx={{ color: '#FF6550' }}>Login</Button>
            ) : (
              <Button sx={{ color: '#fff' }}>Login</Button>
            )
          }
        </NavLink>
      )}
    </>
  );
};
