import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import { Input, Select, Option, Card} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
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
import { AlignHorizontalCenter } from '@mui/icons-material';
import { TableRow, TableCell, TableHead, Grid } from '@mui/material';
import ProfileCard from './ProfileCard';
import RegistrationForm from './components/UpdateProfileComponent';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import { useForm } from 'react-hook-form';
import { userDataFields } from '../callbacks/RegistrationFormUserData';

type ProfileCardProps = {
  UserData: userDataFields;
}



export default function App({UserData} : ProfileCardProps) {
    const { register, handleSubmit, formState: { errors } } = useForm(); //destucturing useForm

    
    return (
        <div>
          <Box 
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: 'hidden',
              },
            }}>

            <Card variant="outlined">
            <div>
                <label htmlFor="userID"><b>User ID</b></label>
                    <br />
                    <Typography level="h6" variant="soft" color="neutral">{UserData.userID}</Typography>
            </div>
            <br />
            <div>
                <label htmlFor="userName"><b>User Name</b></label>
                    <br />
                    <Typography level="h6" variant="soft" color="neutral">{UserData.userName}</Typography>
            </div>
            <br />
            <div>
                <label htmlFor="userType"><b>User Type</b></label>
                    <br />
                    <Typography level="h6" variant="soft" color="neutral">{UserData.userType}</Typography>
            </div>
            <br />
      <div>
        <label htmlFor="phoneNumber"><b>Phone Number</b></label>
        <br />
        <Typography level="h6" variant="soft" color="neutral">{UserData.phoneNumber}</Typography>
      </div>
      <br />
      <div>
        <label htmlFor="email"><b>Email ID</b></label>
        <br />
        <Typography level="h6" variant="soft" color="neutral">{UserData.email}</Typography>
      </div>
      </Card>
          </Box>

    </div>
    )
}