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
import FirstSidebar from './components/FirstSidebar';
import SecondSidebar from './components/SecondSidebar';
import OrderTable from './components/OverviewTable';
import Header from './components/Header';
import ColorSchemeToggle from './components/ColorSchemeToggle';
import customTheme from './theme';
import profilePic from '../assets/default_profile_img.jpg';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import UpdateForm from './components/UpdateProfileComponent';
import { TagLeftIcon } from '@chakra-ui/react';
import { getUserData, userDataFields } from '../callbacks/RegistrationFormUserData';
import { Card } from '@mui/material';
import { useEffect } from 'react';

const profilePicture = {
  borderRadius: "50%",
  alignItems: 'center',
  // maxHeight: "150px",
  // minHeight: "150px",
}

const info = 
{
  name: 'Jack',
  userid: '21A4',
  email: 'jack@email.com',
  phoneNo: '1234567890',
  picture: profilePic,
  joiningDate: '1.3.2023',
  pendingDues: '500',
  walletBalance: '623',
};

export default function App() {

  console.log("inside settings page");
  // console.log(getUserData);




  // const setUserData = (data: userDataFields) => {
  //   console.log("inside setter function");
  //   setUsersData(data);
  // };


  
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
                Update Profile
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
              Update Profile
            </Typography>
            <Box sx={{ flex: 999 }} />
           
          </Box>
          {/* <div className="ProfilePhoto">
              <img style={{borderRadius: "50%", float: 'left', marginRight: 50}} src={info.picture}></img>
          </div> */}
          <Box sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: 'hidden',
              },
            }}>
          <div>
            <Card>
              {/* <UpdateForm onSubmit={()=>console.log("tera ma ka bhosda")}disableComponents={false}/> */}
            </Card>
          </div>
          </Box>
          </div>
  )
   }
