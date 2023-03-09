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
import OrderTable from './components/OrderTable';
import Header from './components/Header';
import ColorSchemeToggle from './components/ColorSchemeToggle';
import customTheme from './theme';
import { Table } from '@mui/joy';
import profilePic from './components/default_profile_img.jpg'
import { AlignHorizontalCenter } from '@mui/icons-material';
import { TableRow, TableCell, TableHead } from '@mui/material';


// const tableHeader = {
//   paddingLeft:"10%",
//   paddingBottom:"1%",
// }

const profilePicture = {
  borderRadius: "50%",
  // maxHeight: "150px",
  // minHeight: "150px",
}

// const tableContent = {
//   paddingLeft:"20%",
//   paddingTop:"1%",
//   border:"0%",
//   color:"#898a8c",
// }

// const nameDisplay = {
//   fontSize: "3em",
//   paddingLeft:"20%",
//   color:"#898a8c",
//   borderTop:"0px",
// }

const ProfileContainer = {
  display: "flex",
  flexDirection: "row",
  marginTop: "50px",
}

const ProfileDetails = {
  marginLeft:"10%",
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

          <div style={ProfileContainer}>
            <div className="ProfilePhoto">
              <img style={profilePicture} src={info.picture}></img>
            </div>
            <div className="ProfileDetails" style={ProfileDetails}>
              <Table>
                  <tr>
                    <td>
                      <h2>Name:</h2>
                    </td>
                    <td>
                      <h3>{info.name}</h3>
                    </td>
                    <td>
                      <h2>UserID:</h2>
                    </td>
                    <td>
                      <h3>{info.userid}</h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>Phone Number:</h2>
                    </td>
                    <td>
                      <h3>{info.phoneNo}</h3>
                    </td>
                    <td>
                      <h2>Email ID:</h2>
                    </td>
                    <td>
                      <h2>{info.email}</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2>Pending Dues:</h2>
                    </td>
                    <td>
                      <h3>{info.pendingDues}</h3>
                    </td>
                    <td>
                      <h2>Current Balance:</h2>
                    </td>
                    <td>
                      <h3>{info.walletBalance}</h3>
                    </td>
                  </tr>
              </Table>
          </div>
        </div>
      </div>
    )
}