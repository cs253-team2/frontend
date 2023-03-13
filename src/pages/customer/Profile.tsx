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
import ProfileCard from './ProfileDetails';
import { useNavigate } from 'react-router-dom';

export default function App() {

  const navigate = useNavigate();
  const updateprofilepage= () => {
    navigate('/customer/update_profile');
    window.location.reload();
  };
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
        <ProfileCard />
        {/* <div style={{display:"flex"}}> */}
          <Box sx={{display: 999}}>
            <Button size="lg"color='danger' variant='solid'
                sx={{
                  float: "right", 
                  marginTop:"5%", 
                  marginRight:"5%",
                  fontWeight: 600}}>Delete Profile</Button>
            <Button size="lg" variant='solid' onClick={updateprofilepage}
                sx={{
                    float:"right", 
                    marginTop:"5%", 
                    marginRight:"5%",
                    fontWeight: 600}}>Edit Profile</Button>
          </Box>
        </Sheet>
        {/* </div> */}


      </div>
    )
}