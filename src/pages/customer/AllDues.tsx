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
import DuesTable from './components/DuesTable';
import {PendingDues, PendingDue, getPendingDues} from '../callbacks/CustomerDues';

// const rows = [
//   {
//     id: 'INV-1234',
//     date: 'Jan 3, 2023',
//     status: 'Paid',
//     vendor: {
//       initial: 'O',
//       name: 'Olivia Ryhe',
//       email: 'olivia@email.com',
//     },
//     amount: '69',
//   },
//   {
//     id: 'INV-1233',
//     date: 'Feb 3, 2023',
//     status: 'Paid',
//     vendor: {
//       initial: 'S',
//       name: 'Steve Hampton',
//       email: 'steve.hamp@email.com',
//     },
//     amount: '420',
//   },
//   {
//     id: 'INV-1232',
//     date: 'Feb 3, 2023',
//     status: 'Paid',
//     vendor: {
//       initial: 'C',
//       name: 'Ciaran Murray',
//       email: 'ciaran.murray@email.com',
//     },
//     amount: '69',
//   },
//   {
//     id: 'INV-1231',
//     date: 'March 3, 2023',
//     status: 'Refunded',
//     vendor: {
//       initial: 'M',
//       name: 'Maria Macdonald',
//       email: 'maria.mc@email.com',
//     },
//     amount: '69',
//   },
//   {
//     id: 'INV-1230',
//     date: 'Feb 3, 2023',
//     status: 'Paid',
//     vendor: {
//       initial: 'C',
//       name: 'Charles Fulton',
//       email: 'fulton@email.com',
//     },
//     amount: '69',
//   },
//   {
//     id: 'INV-1229',
//     date: 'Dec 3, 2023',
//     status: 'Cancelled',
//     vendor: {
//       initial: 'J',
//       name: 'Jay Hooper',
//       email: 'hooper@email.com',
//     },
//     amount: '69',
//   },
//   {
//     id: 'INV-1228',
//     date: 'Feb 3, 2023',
//     status: 'Cancelled',
//     vendor: {
//       initial: 'K',
//       name: 'Krystal Stevens',
//       email: 'k.stevens@email.com',
//     },
//     amount: '420',
//   },
//   {
//     id: 'INV-1227',
//     date: 'Feb 3, 2023',
//     status: 'Paid',
//     vendor: {
//       initial: 'S',
//       name: 'Sachin Flynn',
//       email: 's.flyn@email.com',
//     },
//     amount: '420',
//   },
//   {
//     id: 'INV-1226',
//     date: 'Feb 3, 2023',
//     status: 'Cancelled',
//     vendor: {
//       initial: 'B',
//       name: 'Bradley Rosales',
//       email: 'brad123@email.com',
//     },
//     amount: '420',
//   },
// ];

export default function App() {
    const [rows, setRows] = React.useState<PendingDue[]>([]);

    
    
    
    
    
    React.useEffect(() => {
        getPendingDues().then((data: PendingDue[]) => {
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
                All Dues
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
              All Dues
            </Typography>
            <Box sx={{ flex: 999 }} />
           
          </Box>
          <DuesTable placeholder="Enter to search" rows={rows}/>
        </div>
        

    )
}