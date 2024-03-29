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
import { useEffect } from 'react';
import {TransactionHistoryDataFields, getTransactions} from '../callbacks/VendorTransactions';

export default function App() {
  
  const [rows, setRows] = React.useState<TransactionHistoryDataFields[]>([]);

  useEffect(()=>{
    //console.log("useEffect called");
    const userid:string|null = localStorage.getItem('userid');
    getTransactions(userid).then((data:TransactionHistoryDataFields[])=>{
      //console.log("data is ", data);
      setRows(data);
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
            <TransactionTable placeholder="Enter to Search" data={rows} />
          </Box>

      
        </div>
      

    )
}