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
import OverviewTable from './components/OverviewTable';
import Header from './components/Header';
import ColorSchemeToggle from './components/ColorSchemeToggle';
import customTheme from './theme';
import Card from '@mui/joy/Card';
import { Modal, ModalClose, ModalDialog, Sheet } from '@mui/joy';
import { getOverviewNavbarData, OverviewNavbarFields, getVendorOverviewRecentTransactions, TransactionsVendorPage, TransactionsDataOverviewPage } from '../callbacks/Overview';
import {requestDueClearance} from '../callbacks/RequestDueClearance';

export default function OverviewComponent() {
    const [navbarData, setNavbarData] = React.useState<OverviewNavbarFields>({balance: 0, pendingDues: 0});
    const [recentVendorTransactionData, setRecentVendorTransactionData] = React.useState<TransactionsVendorPage[]>([]);
    const [recentNonVendorTransactionData, setRecentNonVendorTransactionData] = React.useState<TransactionsVendorPage[]>([]);
    React.useEffect(() => {
        getOverviewNavbarData().then((data: OverviewNavbarFields) => {
            setNavbarData(data);
        });
        getVendorOverviewRecentTransactions().then((data: TransactionsDataOverviewPage) => {
            // console.log("data in Overview.tsx: ", data.recentTransactions.transactionsVendor);
            setRecentVendorTransactionData(data.recentTransactions.transactionsVendor);
            setRecentNonVendorTransactionData(data.recentTransactions.transactionsNonVendor);
            // console.log("this is recentNonVendroTransactionrls.s.s",recentVendorTransactionData);
        });
    },[]);

    return(
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
                href="/customer/overview"
              >
                Dashboard
              </Link>
              <Typography fontSize="inherit" variant="soft" color="primary">
                Overview
              </Typography>
            </Breadcrumbs>
            <ColorSchemeToggle
              sx={{ ml: 'auto', display: { xs: 'none', md: 'inline-flex' } }}
            />
          </Box>
          {/* <Box
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
            <Box sx={{ flex: 999 }} />
          </Box> */}
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
            <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '50%',
            }}
            >
              <Card
              sx={{
                alignItems: 'center',
                marginLeft: '10%',
                marginRight: '5%'
              }}
              variant='plain'
              >
                <Typography level="h5">
                  Total Dues
                </Typography>
                {navbarData.pendingDues}
              </Card>
              <Card
              sx={{
                alignItems: 'center',
                marginLeft: '5%',
                marginRight: '5%',
              }}
              variant='plain'
              >
                <Typography level='h5'>
                  Due Date
                </Typography>
                April 1, 2023
              </Card>
              <Card
              sx={{
                alignItems: 'center',
                marginLeft: '5%',
                marginRightt: '10%',
              }}
              variant='plain'
              >
                <Typography level="h5">
                  Balance
                </Typography>
                {navbarData.balance}
              </Card>
            </Box>
            <Box
            sx={{
              width: '30%',
              alignItems: 'center',
            }}
            >
              {/* <Button
              sx={{
                alignItems: 'center',
                width: '50%',
              }}
              color='primary'
              size='lg'
              onClick={() => requestDueClearance()}>
                <Typography level='h4'>
                  <b>Request Clear All Dues</b>
                </Typography>
              </Button> */}
            </Box>
          </Box>
          <br />
          <br />
          <Sheet
          sx={{
            width: "100%",
            height: "71vh",
            borderRadius: "md",
            flex: 1,  
            overflow: "auto",
            overflowY: "scroll",
            minHeight: 0,
            border:"none"
          }}>
          <Box
          sx={{
            alignItems: 'center',
          }}
          >
            <br />
            <br />
            <Typography level="h3">
              Recent People
            </Typography>
            <br />
            <OverviewTable data={recentVendorTransactionData}/>

          </Box>
          </Sheet>
        </div>
    )
}

// download buttons that are removed for now
            {/* <Box sx={{ display: 'flex', gap: 1, '& > *': { flexGrow: 1 } }}>
              <Button
                variant="outlined"
                color="neutral"
                startDecorator={<i data-feather="download-cloud" />}
              >
                Download PDF
              </Button>
              <Button
                variant="outlined"
                color="neutral"
                startDecorator={<i data-feather="table" />}
              >
                Download CSV
              </Button>
            </Box> */}