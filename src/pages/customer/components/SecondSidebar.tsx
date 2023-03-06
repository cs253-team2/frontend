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
import { useNavigate } from 'react-router-dom';
import SecondSidebarProps from '../customer';


export default function SecondSidebar(props: any) {
  const navigate = useNavigate();
  const {setOptions, options} = props;
  const handleClick = (data: SecondSidebarProps) => {
    setOptions(data);
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
        sx={{
          position: {
            xs: 'fixed',
            lg: 'sticky',
          },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--FirstSidebar-width, 0px)))',
            lg: 'none',
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
            Dashboard
          </ListSubheader>
          <ListItem>
            <ListItemButton selected={options.overview} variant={options.overview?"soft":"plain"} onClick={() => handleClick({
              overview: true,
              notifications: false,
              analytics: false,
              saved_reports: false,
              orders: false,
              user_reports: false,
              settings: false,
            })}>
              <ListItemDecorator>
                <i data-feather="activity" />
              </ListItemDecorator>
              <ListItemContent>Overview</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.notifications} variant={options.notifications?"soft":"plain"} onClick={() => handleClick({
              overview: false,
              notifications: true,
              analytics: false,
              saved_reports: false,
              orders: false,
              user_reports: false,
              settings: false,
            })}>
              <ListItemDecorator>
                <i data-feather="bell" />
              </ListItemDecorator>
              <ListItemContent>Notifications</ListItemContent>
              {/* <Chip variant="soft" size="sm">
                10
              </Chip> */}
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.analytics} variant={options.analytics?"soft":"plain"} onClick={() => handleClick({
              overview: false,
              notifications: false,
              analytics: true,
              saved_reports: false,
              orders: false,
              user_reports: false,
              settings: false,
            })}>
              <ListItemDecorator>
                <i data-feather="bar-chart" />
              </ListItemDecorator>
              <ListItemContent>Analytics</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.saved_reports} variant={options.saved_reports?"soft":"plain"} onClick={() => handleClick({
              overview: false,
              notifications: false,
              analytics: false,
              saved_reports: true,
              orders: false,
              user_reports: false,
              settings: false,
            })}>
              <ListItemDecorator>
                <i data-feather="star" />
              </ListItemDecorator>
              <ListItemContent>Saved reports</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.orders} variant={options.orders?"soft":"plain"} onClick={()=>handleClick({
              overview: false,
              notifications: false,
              analytics: false,
              saved_reports: false,
              orders: true,
              user_reports: false,
              settings: false,
            })}>
              <ListItemDecorator>
                <i data-feather="shopping-cart" />
              </ListItemDecorator>
              <ListItemContent>Orders</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.user_reports} variant={options.user_reports?"soft":"plain"} onClick={() => handleClick({
              overview: false,
              notifications: false,
              analytics: false,
              saved_reports: false,
              orders: false,
              user_reports: true,
              settings: false,
            })}>
              <ListItemDecorator>
                <i data-feather="user" />
              </ListItemDecorator>
              <ListItemContent>User reports</ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={options.settings} variant={options.settings?"soft":"plain"} onClick={() => handleClick({
              overview: false,
              notifications: false,
              analytics: false,
              saved_reports: false,
              orders: false,
              user_reports: false,
              settings: true,
            })}>
              <ListItemDecorator>
                <i data-feather="settings" />
              </ListItemDecorator>
              <ListItemContent>Settings</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ pl: 1, mt: 'auto', display: 'flex', alignItems: 'center' }}>
          <div>
            <Typography fontWeight="lg" level="body2">
              Olivia Ryhe
            </Typography>
            <Typography level="body2">olivia@email.com</Typography>
          </div>
          <IconButton variant="plain" sx={{ ml: 'auto' }}>
            <i data-feather="log-out" />
          </IconButton>
        </Box>
      </Sheet>
    </React.Fragment>
  );
}
