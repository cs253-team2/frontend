import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import useScript from './useScript';
import Sheet from "@mui/joy/Sheet";
import FirstSidebar from './components/FirstSidebar';
import SecondSidebar from './components/SecondSidebar';
import OrderTable from './components/OverviewTable';
import Header from './components/Header';
import ColorSchemeToggle from './components/ColorSchemeToggle';
import customTheme from './theme';
import { AlignHorizontalCenter } from '@mui/icons-material';
import { TableRow, TableCell, TableHead, Grid } from '@mui/material';
import ProfileCard from './ProfileCard';
import { useNavigate } from 'react-router-dom';
import { getUserData, userDataFields } from '../callbacks/RegistrationFormUserData';
import { Card } from '@mui/joy';

export default function App() {

  const navigate = useNavigate();
  const updateprofilepage= () => {
    navigate('/customer/update_profile');
    window.location.reload();
  };

  console.log(getUserData);

  const [UserData, setUsersData] = React.useState<userDataFields>(
    {
      userName: "",
      userID: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      userType: "",
    }
  );

  const setUserData = (data: userDataFields) => {
    console.log("inside setter function");
    setUsersData(data);
  };

  React.useEffect (() => {
    console.log("use effect called in update profile table");
    getUserData().then((data) => {
      console.log("data received in update profile page");
      console.log(data);
      setUserData(data);
      console.log("Vendors Data: ", UserData);
    });
  }, []);


    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<i data-feather="chevron-right" />}
              sx={{
                '--Breadcrumbs-gap': '1rem',
                '--Icon-fontSize': '16px',
                fontWeight: 'lg',
                color: 'neutral.400',
                px: 0,
              }}
            >
              <Link
                underline="none"
                color="neutral"
                fontSize="inherit"
                href="#some-link"
                aria-label="Home"
              >
                <i data-feather="home" />
              </Link>
              <Link
                underline="hover"
                color="neutral"
                fontSize="inherit"
                href="#some-link"
              >
                Dashboard
              </Link>
              <Typography fontSize="inherit" variant="soft" color="primary">
                Profile
              </Typography>
            </Breadcrumbs>
            <ColorSchemeToggle
              sx={{ ml: 'auto', display: { xs: 'none', md: 'inline-flex' } }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              my: 1,
              gap: 1,
              flexWrap: 'wrap',
              '& > *': {
                minWidth: 'clamp(0px, (500px - 100%) * 999, 100%)',
                flexGrow: 1,
              },
            }}
          >
            <Typography level="h1" fontSize="xl4">
              Profile
            </Typography>
            <Box sx={{ flex: 999 }} />
           
          </Box>
        
        <Sheet
          className="ProfileTableContainer"
          variant="outlined"
          sx={{
            width: "100%",
            height: "83vh",
            borderRadius: "md",
            flex: 1,  
            overflow: "auto",
            overflowY: "scroll",
            minHeight: 0,
            border:"none"
          }}
        >
        <Card variant='outlined'>
          <ProfileCard disableComponents={false} UserData={UserData}/>
        </Card>
        {/* <div style={{display:"flex"}}> */}
        </Sheet>
        {/* </div> */}


      </div>
    )
}