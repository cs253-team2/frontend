//@ts-nocheck
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
import Overview from './Overview';
import Notifications from './Notifications';
import AllDues from './AllDues';
import TransactionHistory from './TransactionHistory';
import Customers from './Customers';
import Profile from './Profile';
import Settings from './Settings';
import { Navigate } from 'react-router-dom';

const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function JoyOrderDashboardTemplate(props) {
  const {tabsel} = props;
  
  const status = useScript(`https://unpkg.com/feather-icons`);

  
  const [options, setOptions] = React.useState({
    overview: tabsel=="overview" ? true : false,
    notifications: tabsel=="notifications" ? true : false,
    alldues: tabsel=="alldues" ? true : false,
    transaction_history: tabsel=="transaction_history" ? true : false,
    customers: tabsel=="customers" ? true : false,
    profile: tabsel=="profile" ? true : false,
    settings: tabsel=="settings" ? true : false,
  });

   
  
  
  function ExportComponent(){
    //console.log(options);
    const userType = localStorage.getItem("type");
    if(userType == "CUSTOMER" | userType == null){
      return <Navigate to="/random" />
    }
    if(options.overview){
      return <Overview/>
    } else if(options.notifications){
      //console.log("notifications");
      return <Notifications/>
    } else if(options.alldues){
      //console.log("Alldues");
      return <AllDues/>
    } else if(options.transaction_history){
      //console.log("transaction_history");
      return <TransactionHistory/>
    } else if(options.customers){
      //console.log("vendors");
      return <Customers/>
    } else if(options.profile){
      //console.log("profile");
      return <Profile/>
    } else if(options.settings){
      //console.log("settings");
      return <Settings/>
    }
  }


  

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  return (
    <CssVarsProvider disableTransitionOnChange theme={customTheme}>
      <GlobalStyles
        styles={{
          '[data-feather], .feather': {
            color: 'var(--Icon-color)',
            margin: 'var(--Icon-margin)',
            fontSize: 'var(--Icon-fontSize, 20px)',
            width: '1em',
            height: '1em',
          },
        }}
      />
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        {/* <FirstSidebar /> */}
        <SecondSidebar setOptions={setOptions} options = {options}/>
        <Box
          component="main"
          className="MainContent"
          sx={(theme) => ({
            px: {
              xs: 2,
              md: 6,
            },
            pt: {
              xs: `calc(${theme.spacing(2)} + var(--Header-height))`,
              sm: `calc(${theme.spacing(2)} + var(--Header-height))`,
              md: 3,
            },
            pb: {
              xs: 2,
              sm: 2,
              md: 3,
            },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          })}
        >
          <ExportComponent/>
          
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
