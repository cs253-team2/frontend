// @ts-nocheck
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormLabel, { formLabelClasses } from '@mui/joy/FormLabel';
import IconButton, { IconButtonProps } from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import customTheme from './theme';
import GoogleIcon from './GoogleIcon';
import Validate from './Validate';
import RegistrationForm from './RASRegistrationForm';

// import { Form, Button } from 'semantic-ui-css/components/form';
import { useForm } from "react-hook-form";

import { useNavigate } from 'react-router-dom';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  role: HTMLInputElement;
  persistent: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function ColorSchemeToggle({ onClick, ...props }: IconButtonProps) {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="plain" color="neutral" disabled />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="plain"
      color="neutral"
      {...props}
      onClick={(event) => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
        onClick?.(event);
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

/**
 * This template uses [`Inter`](https://fonts.google.com/specimen/Inter?query=inter) font.
 */

//   const [errors, setErrors] = React.useState({
//     email: "",
//     phoneNumber: "",
//     password: "",
//     cnfpassword: "",
//   })

export default function JoySignInSideTemplate() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm(); //destucturing useForm

  return (
    <CssVarsProvider
      defaultMode="dark"
      disableTransitionOnChange
      theme={customTheme}
    >
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Collapsed-breakpoint': '769px', // form will stretch when viewport is below `769px`
            '--Cover-width': '40vw', // must be `vw` only
            '--Form-maxWidth': '700px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width:
            'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255 255 255 / 0.6)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width:
              'clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)',
            maxWidth: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontWeight="lg"
              startDecorator={
                <Box
                  component="span"
                  // sx={{
                  //   width: 40,
                  //   height: 40,
                  //   background: (theme) =>
                  //     `linear-gradient(45deg, ${theme.vars.palette.primary.solidBg}, ${theme.vars.palette.primary.solidBg} 30%, ${theme.vars.palette.primary.softBg})`,
                  //   borderRadius: '50%',
                  //   boxShadow: (theme) => theme.shadow.md,
                  //   '--joy-shadowChannel': (theme) =>
                  //     theme.vars.palette.primary.mainChannel,
                  // }}
                >
                  <img width={40} height={40} src= "https://www.shutterstock.com/image-vector/initial-letter-cp-linked-circle-260nw-463344173.jpg" alt="CampusPay Logo"></img>
                </Box>
              }
            >
              Campus Pay
            </Typography>
            <ColorSchemeToggle />
          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
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
            }}
          >
            <div>
              <Typography component="h2" fontSize="xl2" fontWeight="lg">
                Join Us
              </Typography>
              <Typography level="body2" sx={{ my: 1, mb: 3 }}>
                <b>Registe Here. Please enter the following details.</b><br /><br />
                Fields marked with * are compulsory
              </Typography>
            </div>
            <form
              onSubmit={(event: React.FormEvent<SignInFormElement>) => {
                event.preventDefault();
                const formElements = event.currentTarget.elements;
                const data = {
                  firstName: formElements.fname.value,
                  lastName: formElements.lname.value,
                  phoneNumber: formElements.phoneno.value,
                  email: formElements.email.value,
                  password: formElements.password.value,
                  cnfpassword: formElements.reenterpassword.value,
                  role: formElements.role[1].value,
                  persistent: formElements.persistent.checked,
                };
                
                setErrors(Validate(data))
                

                alert(JSON.stringify(data, null, 2));
                if(data.role === 'vendor') {
                  navigate('/vendor');
                } else {
                  navigate('/customer');
                }
              }}
            > 
              <FormControl required>
                <FormLabel>First Name *</FormLabel>
                  <Input placeholder="Enter your first name" type="text" name="fname" />
              </FormControl>

              <FormControl>
              <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Enter your last name" type="text" name="lname" />
              </FormControl>
              <FormControl required>
                <FormLabel>Phone Number *</FormLabel>
                <Input placeholder="10 digit phone number" type="text" name="phoneno" />
                  {errors.phoneNumber && <p style={{color:"red"}}>{errors.phoneNumber}</p>}
              </FormControl>
              <FormControl required>
                <FormLabel>Email ID *</FormLabel>
                <Input placeholder="Enter your email" type="text" name="email" />
                  {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
              </FormControl>
              <FormControl required>
                <FormLabel>Password *</FormLabel>
                <Input placeholder="Enter your password" type="password" name="password" />
                  {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
              </FormControl>
              <FormControl required>
                <FormLabel>Confirm  Password *</FormLabel>
                <Input placeholder="Renter your password" type="password" name="reenterpassword" />
                {errors.cnfpassword && <p style={{color:"red"}}>{errors.cnfpassword}</p>}
              </FormControl>
              <FormControl required>
                <FormLabel>Are you registering as a vendor or customer?</FormLabel>
                <Select name="role">
                  <Option value="customer">Customer</Option>
                  <Option value="vendor">Vendor</Option>
                </Select>
              </FormControl>
              <Button type="submit" fullWidth>
                Register
              </Button>
            </form>

            {/* <Typography component="h4" textAlign="center">OR</Typography> */}

            {/* <Button
              variant="outlined"
              color="neutral"
              fullWidth
              startDecorator={<GoogleIcon />}
            >
              Register with Google
            </Button> */}

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </label>
                {errors.firstName && <p>Please check the First Name</p>}
                <label>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </label>
                {errors.lastName && <p>Please check the Last Name</p>}
                <label>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </label>
                {errors.email && <p>Please check the Email</p>}
                <label>
                    <label>Password</label>
                    <input
                        placeholder='Password'
                        type="password"
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </label>
                {errors.password && <p>Please check the Password</p>}
                    <Button type='submit'>Submit</Button>
            </form> */}

            {/* <RegistrationForm /> */}
          </Box>


          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body3" textAlign="center">
              © Your company {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831)',
          },
        })}
      />
    </CssVarsProvider>
  );
}
