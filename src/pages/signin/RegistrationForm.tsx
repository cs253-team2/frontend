import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import { Input, Select, Option, FormControl} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { userDataFields } from '../callbacks/RegistrationFormUserData';
import { FormHelperText } from '@mui/material';
import { registerUser, userRegistrationData } from '../callbacks/Register';


type RegistrationFormProps = {
  onSubmit: (values: userDataFields) => void;
};

const selectStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  backgroundColor: "background.body",
  // color: "#444",
  fontSize: "16px",
  cursor: "pointer",
  width:"100%",
}

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberPattern = /^\d{10}$/;


const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [values, setValues] = useState<userDataFields>({
    // firstName: '',
    // lastName: '',
    userName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
  });

  const [errors, setErrors] = useState<Partial<userDataFields>>({});
  const [userType, setUserType] = useState<string>('');
  const validate = (values: userDataFields) => {
    const errors: Partial<userDataFields> = {};

    // if (!values.firstName.trim()) {
    //   errors.firstName = 'First name is required';
    // }

    if (!values.userName.trim()) {
      errors.userName = 'User name is required';
    }

    if (!values.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!phoneNumberPattern.test(values.phoneNumber.trim())) {
      errors.phoneNumber = 'Phone number should have 10 digits';
    }

    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(values.email.trim())) {
      errors.email = 'Email is invalid';
    }

    if (!values.password.trim()) {
      errors.password = 'Password is required';
    } else if(!passwordPattern.test(values.password.trim())) {
        errors.password = 'Password is invalid';
    }

    if (!values.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm password is required';
    }

    if (values.password.trim() !== values.confirmPassword.trim()) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!values.userType) {
        errors.userType = 'This is a required field';
      }
    return errors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    const userTypeInputElement = event.currentTarget.elements[0] as HTMLInputElement;
    setValues((prevValues) => ({
      ...prevValues,
      userType: userType,
    }));

    const errors = validate(values);
    setErrors(errors);
    if(Object.keys(errors).length === 0) {
      const data:userRegistrationData = {
        username: values.userName,
        password: values.password,
        email: values.email,
        phone_number: values.phoneNumber,
        type: values.userType,
        confirm_password: values.confirmPassword,
      } 
      registerUser(data).then((response) => {
      // console.log(response);
      navigate('/');
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // console.log(values);
    if( name == "userType") {
      setUserType(value);
    }
    setErrors((errors) => ({ ...errors, [name]: ''}));
  };

  const navigate = useNavigate();
  const signinpage = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <div>
        <label htmlFor="firstName"><b>First Name *</b></label>
        <br />
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder='abc'
          value={values.firstName}
          onChange={handleChange}
          style={{width:"100%"}}
        />
        {errors.firstName && <span style={{color: "red"}}>{errors.firstName}</span>}
      </div> */}

      <div>
        <label htmlFor="userName"><b>User Name *</b></label>
        <br />
        <Input
          type="text"
          id="userName"
          name="userName"
          placeholder='abc'
          value={values.userName}
          onChange={handleChange}
          style={{width:"100%"}}
        />
        {errors.userName && <span style={{color: "red"}}>{errors.userName}</span>}
      </div>
      {/* <div>
        <label htmlFor="lastName"><b>Last Name</b></label>
        <br />
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder='xyz'
          value={values.lastName}
          onChange={handleChange}
          style={{width:"100%"}}
        />
      </div> */}
      <div>
        <label htmlFor="phoneNumber"><b>Phone Number *</b></label>
        <br />
        <Input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder='123-456-7890'
          value={values.phoneNumber}
          onChange={handleChange}
          style={{width:"100%"}}
        />
        {errors.phoneNumber && <span style={{color: "red"}}> {errors.phoneNumber} </span>}
      </div>
      <div>
        <label htmlFor="email"><b>Email ID *</b></label>
        <br />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder='abc.xyz@gmail.com'
          value={values.email}
          onChange={handleChange}
          style={{width:"100%"}}
        />
        {errors.email && <span style ={{color:"red"}}>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password"><b>Password *</b></label>
        <br />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder='abcxyz@123'
          value={values.password}
          onChange={handleChange}
          style={{width:"100%"}}
        />
        
        {errors.password && <span style={{color: "red"}}> {errors.password} </span>}
      </div>
      <div>
        <label htmlFor="confirmPassword"><b>Confirm Password *</b></label>
        <br />
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='abcxyz@123'
          value={values.confirmPassword}
          onChange={handleChange}
          style={{width:"100%"}}
        />
        {errors.confirmPassword && <span style={{color: "red"}}> {errors.confirmPassword} </span>}
      </div>
      <div>
        <label htmlFor="userType"><b>Are you registering as a customer or a vendor? *</b></label>
        <br />
        <select 
            id="userType" 
            name="userType" 
            value={values.userType} 
            onChange={handleChange}
            style={selectStyle}
          >
          <option defaultValue=""></option>
          <option value="CUSTOMER">Customer</option>
          <option value="VENDOR">Vendor</option>
        </select>
        {errors.userType && <span style={{color:"red"}}>{errors.userType}</span>}
      </div>
      <br />
      <Button type="submit" fullWidth>
                REGISTER
      </Button>
      <Button onClick={signinpage} fullWidth>
               ALREADY REGISTERED? SIGN IN
      </Button>
      


    </form>
  );
};

export default RegistrationForm;



//This is based on Yup
// export default function RegistrationForm() {
//     const formSchema = Yup.object().shape({
//         firstName : Yup.string()
//           .required('First name is mandatory'),
//         phoneNumber : Yup.string()
//           .required('Phone number is mandatory')
//           .matches(
//             /^[0-9]{10}$/,
//             'Invalid Phone Number'
//           ),
//         emailID : Yup.string()
//           .required('Email ID is mandatory')
//           .matches(
//             /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//             'Invalid Email ID'
//           ),
//         password: Yup.string()
//           .required('Password is mandatory')
//           .matches(
//             /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
//             'Invalid Password'
//           ),
//         confirmPwd: Yup.string()
//           .required('Password is mendatory')
//           .oneOf([Yup.ref('password')], 'Passwords does not match'),
//       })
//       const formOptions = { resolver: yupResolver(formSchema) }
//       const { register, handleSubmit, reset, formState : {errors} } = useForm( {
//         defaultValues: {
//             firstName : '',
//             lastName : '',
//             phoneNumber : '',
//             emailID : '',
//             password : '',
//             cnfpassword : '',
//         }
//       });

//     return (
//         <div>
//             <form onSubmit={handleSubmit(console.log)}>
//                 <label>First Name *</label>
//                 <input  {...register("firstName")} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First name" type="text" name="fname"/>
//                 {/* {errors.firstName && <p style={{color: "red"}}>Please enter the name</p>} */}

//                 <label>Last Name</label>
//                 <input {...register("lastName",  )} placeholder="Last name" type="text" name="lname"/>

//                 <label>Phone Number *</label>
//                 <input {...register("phoneNumber")} className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
//                 placeholder="Phone number" type="text" name="phoneNumber" />
//                 {/* {errors.phoneNumber && <p style={{color : "red"}}>Invalid phone number</p>} */}

//                 <label>Email ID *</label>
//                 <input {...register("emailID")} className={`form-control ${errors.emailID ? 'is-invalid' : ''}`}
//                 placeholder="Email ID" type="text" name="emailID" />
//                 {/* {errors.emailID && <p style={{color : "red"}}>Invalid Email ID</p>} */}

//                 <label>Password *</label>
//                 <input {...register("password")} className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                 placeholder="Password" type="password" name="password" />
//                 {/* {errors.password && <p style={{color : "red"}}>Invalid Password</p>} */}

//                 <label>Confirm Password *</label>
//                 <input {...register("cnfpassword")} className={`form-control ${errors.cnfpassword ? 'is-invalid' : ''}`}
//                 placeholder="Re-enter Password" type="password" name="cnfpassword" />
//                 {/* {errors.cnfpassword && <p style={{color : "red"}}>Passwords do not match</p>} */}

//                 <input type="submit"/>

//             </form>
//         </div>
//     )
// }



//This is based on useForm
// export default function RegistrationForm() {
//     const { register, handleSubmit, formState : {errors} } = useForm({
//         defaultValues: {
//           firstName: '',
//           lastName: '',
//           phoneNumber : '',
//           emailID : '',
//           password : '',
//           cnfpassword : '',
//         }
//       });

//     return (
//         <div>
//             <form onSubmit={handleSubmit(console.log)}>
//                 <label>First Name *</label>
//                 <input {...register("firstName", { required: true })} placeholder="First name" type="text" name="fname"/>
//                 {errors.firstName && <p style={{color: "red"}}>Please enter the name</p>}

//                 <label>Last Name</label>
//                 <input {...register("lastName",  )} placeholder="Last name" type="text" name="lname"/>

//                 <label>Phone Number *</label>
//                 <input {...register("phoneNumber", {
//                     required: true, 
//                     pattern: /^[0-9]{10}$/ })} 
//                 placeholder="Phone number" type="text" name="phoneNumber" />
//                 {errors.phoneNumber && <p style={{color : "red"}}>Invalid phone number</p>}

//                 <label>Email ID *</label>
//                 <input {...register("emailID", {
//                     required: true, 
//                     pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} 
//                 placeholder="Email ID" type="text" name="emailID" />
//                 {errors.emailID && <p style={{color : "red"}}>Invalid Email ID</p>}

//                 <label>Password *</label>
//                 <input {...register("password", {
//                     required: true, 
//                     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} 
//                 placeholder="Password" type="text" name="password" />
//                 {errors.password && <p style={{color : "red"}}>Invalid Password</p>}

//                 <label>Confirm Password *</label>
//                 <input {...register("cnfpassword", {
//                     required: true, 
//                     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} 
//                 placeholder="Re-enter Password" type="text" name="cnfpassword" />
//                 {errors.cnfpassword && <p style={{color : "red"}}>Passwords do not match</p>}

//                 <input type="submit"/>

//             </form>
//         </div>
//     )
// }





//This is based from RAS Frontend
// import {
//     Autocomplete,
//     Button,
//     Card,
//     Grid,
//     MenuItem,
//     Select,
//     Stack,
//     TextField,
//   } from "@mui/material";
//   import React, { useEffect, useState } from "react";
//   import { useForm } from "react-hook-form";
// import { Form } from "react-router-dom";
//   import { Profile } from "./Profile";

//   function ProfileEdit() {
//     const [ProfileData, setProfileData] = useState<Profile>({ ID: 0 } as Profile);
//     const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm<Profile>({
//       defaultValues: ProfileData,
//       });
//     const [dept, setDept] = useState<any>("");
//     const [deptSec, setDeptSec] = useState<any>("");

//     return (
//         <div>
//             <h1> HI!</h1>
//             <Grid container spacing={5} sx={{ padding: 3 }}>
//                 <Grid item xs={12} sm={6}>
//                   <p>First Name *</p>
//                   <TextField
//                     fullWidth
//                     type="text"
//                     id="standard-basic"
//                     variant="standard"
//                     error= {!!errors.firstName}
//                     helperText={
//                         errors.firstName ? "First Name is mandatory!" : ""
//                     }
//                     {...register("firstName", {minLength: 1})}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <p>Last Name</p>
//                   <TextField
//                     fullWidth
//                     type="text"
//                     id="standard-basic"
//                     variant="standard"
//                     {...register("lastName")}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <p>Phone Number *</p>
//                   <TextField
//                     fullWidth
//                     type="text"
//                     id="standard-basic"
//                     variant="standard"  
//                     error={!!errors.phoneNumber}
//                     helperText={
//                       errors.phoneNumber ? "Contact No. must contain 10 digits!" : ""
//                     }
//                     {...register("firstName", {
//                         pattern : /^[0-9]{10}$/
//                     })}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <p>Email ID *</p>
//                   <TextField
//                     fullWidth
//                     type="text"
//                     id="standard-basic"
//                     variant="standard"
//                     helperText={
//                         errors.emailID ? "First Name is mandatory!" : ""
//                     }
//                     {...register("emailID", {
//                         pattern : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//                     })}
//                     {...register("firstName")}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <p>Password *</p>
//                   <TextField
//                     fullWidth
//                     type="text"
//                     id="standard-basic"
//                     variant="standard"
//                     {...register("firstName")}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <p>Confirm Password *</p>
//                   <TextField
//                     fullWidth
//                     type="text"
//                     id="standard-basic"
//                     variant="standard"
//                     {...register("firstName")}
//                   />
//                 </Grid>
//             </Grid>
//         </div>
//     )

// }

// export default ProfileEdit