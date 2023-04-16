import * as React from 'react';

import {useEffect} from 'react';
import {useState} from 'react';
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
import Header from './components/Header';
import ColorSchemeToggle from './components/ColorSchemeToggle';
import customTheme from './theme';
import NotificationsTable from "./components/NotificationsTable";
import axios from "axios";
import { json } from 'stream/consumers';
import { getNotifications, NotificationDataFields } from '../callbacks/Notifications';

// interface Notification {
//   id: number;
//   timestamp: Date;
//   subject: string;
//   content: string;
//   mark_as_read: boolean;
//   user: string;
// }
  



// const rows = [
//   {
//     "id": 30,
//     "timestamp": "2023-03-13T17:34:10.013284Z",
//     "subject": "Transaction success.",
//     "content": "Rs. 12 sent successfully to bangar at 17:34, 13-03-2023.",
//     "mark_as_read": false,
//     "user": "OFTW855V"
// },
// {
//     "id": 31,
//     "timestamp": "2023-03-13T17:34:10.014333Z",
//     "subject": "Transaction success.",
//     "content": "Rs. 12 received from sahu at 17:34, 13-03-2023.",
//     "mark_as_read": false,
//     "user": "2HL7YZK9"
// },
// ];


export default function App() {


  // const [NotificationData, setNotificationData] = React.useState<NotificationDataFields[]>([]);


  // const setNotificationDataTemp = (data: NotificationDataFields[]) => {
  //   //console.log("inside setter function");
  //   setNotificationData(data);
  // };

  // useEffect (() => {
  //   getNotifications().then((data) => {
  //     //console.log("data received in notifications.tsx");
  //     //console.log(data);
  //     setNotificationDataTemp(data);
  //     //console.log("Notification Data: ", NotificationData);
  //   });
  // }, []);
  // //console.log(getNotifications());
      
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
              {/* <Link
                underline="none"
                color="neutral"
                fontSize="inherit"
                href="#some-link"
                aria-label="Home"
              >
                <i data-feather="home" />
              </Link> */}
              <Link
                underline="hover"
                color="neutral"
                fontSize="inherit"
                href="/customer/overview"
              >
                Overview
              </Link>
              <Typography fontSize="inherit" variant="soft" color="primary">
                Notifications
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
                Notifications
            </Typography>
            <Box sx={{ flex: 999 }} />
           
          </Box>
          
          
          

          
          <NotificationsTable placeholder="Enter to Search"/>

        </div>
        

    )
}