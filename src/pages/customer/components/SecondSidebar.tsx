import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { closeSidebar } from '../utils';
import { unstable_HistoryRouter, useNavigate, redirect } from 'react-router-dom';
import SecondSidebarProps from '../customer';
import {LogoutUser} from '../../callbacks/LogoutUser';
import { getUserData, UserDataFields } from '../../callbacks/ViewProfile';


export default function SecondSidebar(props: any) {
  const navigate = useNavigate();
  const {setOptions, options} = props;
  const handleClick = (data: SecondSidebarProps) => {
    setOptions(data);
  };


  const [UserData, setUsersData] = React.useState<UserDataFields>(
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


  const setUserData = (data: UserDataFields) => {
    //console.log("inside setter function");
    setUsersData(data);
  };

  React.useEffect (() => {
    getUserData().then((data) => {
      //console.log("data received in profile page");
      //console.log(data);
      setUserData(data);
      //console.log("Vendors Data: ", UserData);
    });
  }, []);
  

  const notificationspage = () => {
    navigate('/customer/notifications');
    window.location.reload();
  };

  const allduespage = () => {
    navigate('/customer/alldues');
    window.location.reload();
  };
  const transaction_historypage = () => {
    navigate('/customer/transaction_history');
    window.location.reload();
  };
  const overviewpage = () => {
   navigate('/customer/overview');
   window.location.reload();
  };
  const profilepage = () => {
    navigate('/customer/profile');
    window.location.reload();
  };
  
const vendorpage = () => {
    navigate('/customer/vendor');
    window.location.reload();
  };

  const settingspage= () => {
    navigate('/customer/update_profile');
    window.location.reload();
  };
  
  const ipaymentpage= () => {
    navigate('/customer/ipayment');
    window.location.reload();
  };

  const addduespage= () => {
    navigate('/customer/adddues');
    window.location.reload();
  };
  
  const logoutUser = () => {
    navigate('/');
    LogoutUser();
  };

  return (
    <React.Fragment>
      <Box
        className="SecondSidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: 'background.body',
          opacity: 'calc(var(--SideNavigation-slideIn, 0) - 0.2)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Sheet
        className="SecondSidebar"
        variant="soft"
        color="primary"
        invertedColors
        sx={{
          position: {
            xs: 'fixed',
            md: 'sticky',
            lg: 'sticky',
            sm: 'sticky'
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'none',
            md: 'none',
            sm: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
          },
          borderRight: '1px solid',
          borderColor: 'divider',
          transition: 'transform 0.4s',
          zIndex: 9999,
          height: '100dvh',
          top: 0,
          p: 2,
          py: 3,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <List
          sx={{
            '--List-item-radius': '8px',
            '--List-item-minHeight': '32px',
            '--List-gap': '4px',
          }}
        >
          <ListSubheader role="presentation" sx={{ color: 'text.primary' }}>
            Customer Dashboard
          </ListSubheader>
          <ListItem>
            <ListItemButton selected={options.overview} variant={options.overview?"soft":"plain"} onClick={overviewpage}>
              <ListItemDecorator>
                <i data-feather="activity" />
              </ListItemDecorator>
              <ListItemContent>Overview</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.notifications} variant={options.notifications?"soft":"plain"} onClick={notificationspage}>
              <ListItemDecorator>
                <i data-feather="bell" />
              </ListItemDecorator>
              <ListItemContent>Notifications</ListItemContent>
              
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.alldues} variant={options.alldues?"soft":"plain"} onClick={allduespage}>
              <ListItemDecorator>
                <i data-feather="bar-chart" />
              </ListItemDecorator>
              <ListItemContent>All Dues</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.transaction_history} variant={options.transaction_history?"soft":"plain"} onClick={transaction_historypage}>
              <ListItemDecorator>
                <i data-feather="star" />
              </ListItemDecorator>
              <ListItemContent>Transaction History</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.vendors} variant={options.vendors?"soft":"plain"} onClick={vendorpage}>
              <ListItemDecorator>
                <i data-feather="shopping-cart" />
              </ListItemDecorator>
              <ListItemContent>Vendors</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.profile} variant={options.profile?"soft":"plain"} onClick={profilepage}>
              <ListItemDecorator>
                <i data-feather="user" />
              </ListItemDecorator>
              <ListItemContent>Profile</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.settings} variant={options.settings?"soft":"plain"} onClick={settingspage}>
              <ListItemDecorator>
                <i data-feather="settings" />
              </ListItemDecorator>
              <ListItemContent>Update Profile</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.ipayment} variant={options.ipayment?"soft":"plain"} onClick={ipaymentpage}>
              <ListItemDecorator>
                <i data-feather="dollar-sign" />
              </ListItemDecorator>
              <ListItemContent>Make Instant Payment</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.adddues} variant={options.adddues?"soft":"plain"} onClick={addduespage}>
              <ListItemDecorator>
                <i data-feather="book-open" />
              </ListItemDecorator>
              <ListItemContent>Add Dues</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>

        <Box sx={{ pl: 1, mt: 'auto', display: 'flex', alignItems: 'center' }}>
          <div>
            <Typography fontWeight="lg" level="h4">
              {UserData.userName}
            </Typography>
            <Typography level="body1">{UserData.userID}</Typography>
          </div>
          <IconButton variant="plain" sx={{ ml: 'auto' }} onClick={logoutUser}>
            <i data-feather="log-out" />
          </IconButton>
        </Box>
      </Sheet>
    </React.Fragment>
  );
}
