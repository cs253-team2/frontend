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
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import { useNavigate } from 'react-router-dom';
import { Sheet } from '@mui/joy';

export default function OverviewComponent() {
  interface modalDataType {
    title: string;
    content: string;
}

  
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  // const [modalData, setModalData] = React.useState<modalDataType>({title: 'Hello', content: 'World'});

  const handleOpen = () =>{
    setOpen(true);
  };
  const navigate = useNavigate();
  const ipaymentpage= () => {
    navigate('/customer/ipayment');
    window.location.reload();
  };

  const addduespage= () => {
    navigate('/customer/adddues');
    window.location.reload();
  };
  


  
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
                1000
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
                1000
              </Card>
            </Box>
            <Box
            sx={{
              width: '30%',
              alignItems: 'center',
            }}
            >
              <Button
                      onClick={() => handleOpen()}
                      color='success'
              >
                      Make Payment
              </Button>
              <Modal open={open} onClose={handleClose}>
                  <ModalDialog
                  aria-labelledby="layout-modal-title"
                  aria-describedby="layout-modal-description"
                  // layout={open || undefined}
                  >
                  <ModalClose />
                  <Button onClick={ipaymentpage}>
                    Make Instant Payment
                  </Button>
                  <br/>
                  <Button onClick={addduespage}>
                    Add Due
                  </Button>
                  </ModalDialog>
              </Modal>
              
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
            <Typography level="h3">
              Recent Vendors
            </Typography>
            <br />
            <OverviewTable />
            <br />
            <br />
            <Typography level="h3">
              Recent People
            </Typography>
            <br />
            <OverviewTable />
          </Box>
          </Sheet>
        </div>
      
    )
}
