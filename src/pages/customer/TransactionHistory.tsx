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
import Header from './components/Header'; 
import ColorSchemeToggle from './components/ColorSchemeToggle';
import customTheme from './theme';
import TransactionTable from './components/TransactionTable';
import { getTransactionHistory, TransactionHistoryDataFields } from '../callbacks/TransactionHistory';

// const rows = [
//   {
//     id: 'INV-1234',
//     date: 'March 3, 2023',
//     status: 'Paid',
//     transactionid : '657489',
//     amount : '1234',
//   },
//   {
//     id: 'INV-1233',
//     date: 'Feb 3, 2023',
//     status: 'Paid',
//     transactionid : '688489',
//     amount : '1234',
//   },
//   {
//     id: 'INV-1232',
//     date: 'Jan 3, 2023',
//     status: 'Paid',
//     transactionid : '768947',
//     amount : '1234',
//   },
//   {
//     id: 'INV-1231',
//     date: 'Feb 3, 2023',
//     status: 'Refunded',
//     transactionid : '876457',
//     amount : '1234',
//   },
//   {
//     id: 'INV-1230',
//     date: 'Feb 3, 2023',
//     status: 'Paid',
//     transactionid : '567868',
//     amount : '1234',
//   },
//   {
//     id: 'INV-1229',
//     date: 'Feb 3, 2023',
//     status: 'Cancelled',
//     transactionid : '123456',
//     amount : '1234',
//   },
//   {
//     id: 'INV-1228',
//     date: 'Feb 3, 2023',
//     status: 'Cancelled',
//     transactionid : '667878',
//     amount : '1234',
//   },
//   {
//     id: 'INV-1227',
//     date: 'April 3, 2023',
//     status: 'Paid',
//     transactionid : '657678',
//     amount : '1234',
//   },
//   {
//     id: 'INV-1226',
//     date: 'Feb 3, 2023',
//     status: 'Cancelled',
//     transactionid : '456789',
//     amount : '1234',
//   },
// ];

export default function App() {
  // console.log(getTransactionHistory());


  const [transactionHistoryData, setTransactionHistoryData] = React.useState<TransactionHistoryDataFields[]>([]);


  const setTransactionHistoryDataTemp = (data: TransactionHistoryDataFields[]) => {
    console.log("inside setter function");
    setTransactionHistoryData(data);
  };

  React.useEffect (() => {
    getTransactionHistory().then((data) => {
      console.log("data received in profile page");
      console.log(data);
      setTransactionHistoryDataTemp(data);
      console.log("Transaction History Data: ", transactionHistoryData);
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
                Transaction History
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
              Transaction History
            </Typography>
            <Box sx={{ flex: 999 }} />
           
          </Box>
          <Box>
            <TransactionTable placeholder="Enter to Search" data={transactionHistoryData} />
          </Box>

      
        </div>
      

    )
}