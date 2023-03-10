import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import { Select } from "@mui/material";
import Option from '@mui/joy/Option';

const profilePicture = {
    borderRadius: "50%",
    alignItems: 'center',
    // maxHeight: "150px",
    // minHeight: "150px",
  }
  
  const info = 
  {
    name: 'Jack',
    userid: '21A4',
    email: 'jack@email.com',
    phoneNo: '1234567890',
    //picture: profilePic,
    joiningDate: '1.3.2023',
    pendingDues: '500',
    walletBalance: '623',
  };
  
  type UpdateFormProps = {
    onSubmit: (values: UpdateFormValues) => void;
  };
  
  type UpdateFormValues = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    // userType: string;
  };
  
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberPattern = /^\d{10}$/;

  const UpdateForm: React.FC<UpdateFormProps> = ({ onSubmit }) => {
    const [values, setValues] = useState<UpdateFormValues>({
      firstName: info.name,
      lastName: '',
      phoneNumber: info.phoneNo,
      email: info.email,
      password: '',
      confirmPassword: '',
      // userType: '',
    });
  
    const [errors, setErrors] = useState<Partial<UpdateFormValues>>({});
    
    const validate = (values: UpdateFormValues) => {
      const errors: Partial<UpdateFormValues> = {};
  
      if (!values.firstName.trim()) {
        errors.firstName = 'First name is required';
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
  
      // if (!values.password.trim()) {
      //   errors.password = 'Password is required';
      // } else if(!passwordPattern.test(values.password.trim())) {
      //     errors.password = 'Password is invalid';
      // }
  
      // if (!values.confirmPassword.trim()) {
      //   errors.confirmPassword = 'Confirm password is required';
      // }
  
      if (values.password.trim() !== values.confirmPassword.trim()) {
        errors.confirmPassword = 'Passwords do not match';
      }
  
      // if (!values.userType) {
      //     errors.userType = 'This is a required field';
      //   }
      return errors;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const errors = validate(values);
      setErrors(errors);
  
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
  
      setErrors((errors) => ({ ...errors, [name]: ''}));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            
      <div>
        <label htmlFor="firstName"><b>First Name *</b></label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder='abc'
          value={values.firstName}
          onChange={handleChange}
          style={{width:350, height:30, borderRadius:4}}
        />
        {errors.firstName && <span style={{color: "red"}}>{errors.firstName}</span>}
      </div>
      <div>
        <label htmlFor="lastName"><b>Last Name</b></label>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder='xyz'
          value={values.lastName}
          onChange={handleChange}
          style={{width:350, height:30, borderRadius:4}}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber"><b>Phone Number *</b></label>
        <br />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder='123-456-7890'
          value={values.phoneNumber}
          onChange={handleChange}
          style={{width:350, height:30, borderRadius:4}}
        />
        {errors.phoneNumber && <span style={{color: "red"}}> {errors.phoneNumber} </span>}
      </div>
      <div>
        <label htmlFor="email"><b>Email ID *</b></label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder='abc.xyz@gmail.com'
          value={values.email}
          onChange={handleChange}
          style={{width:350, height:30, borderRadius:4}}
        />
        {errors.email && <span style ={{color:"red"}}>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password"><b>Password </b></label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder='abcxyz@123'
          value={values.password}
          onChange={handleChange}
          style={{width:350, height:30, borderRadius:4}}
        />
        {errors.password && <span style={{color: "red"}}> {errors.password} </span>}
      </div>
      <div>
        <label htmlFor="confirmPassword"><b>Confirm Password </b></label>
        <br />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder='abcxyz@123'
          value={values.confirmPassword}
          onChange={handleChange}
          style={{width:350, height:30, borderRadius:4}}
        />
        {errors.confirmPassword && <span style={{color: "red"}}> {errors.confirmPassword} </span>}
      </div> 
       {/* <div>
        <label htmlFor="userType"><b>Are you registering as a customer or a vendor? *</b></label>
        <br />
        <select 
            id="userType" 
            name="userType" 
            value={values.userType} 
            onChange={handleChange}
            style={{width:"100%"}}>
          <option defaultValue="" disabled></option>
          <option value="customer">Customer</option>
          <option value="vendor">Vendor</option>
        </select>
        {errors.userType && <span style={{color:"red"}}>{errors.userType}</span>}
      </div> */}
      <br />
      <Button type="submit" sx={{width:350}}>
                Save Changes
              </Button>
      </form>
          {/* <Box sx={{ flex: 999}}>
          <div className="ProfilePhoto">
              <img style={profilePicture} src={info.picture}></img>
          </div>
          </Box>
          <Box>
           <form>
           <FormControl required>
                <FormLabel>Name</FormLabel>
                <Input placeholder={info.name} type="email" name="email" />
              </FormControl>
              <FormControl required>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder={info.phoneNo} type="password" name="password" />
              </FormControl>
              <FormControl required>
                <FormLabel>E-mail</FormLabel>
                <Input placeholder={info.email} type="password" name="password" />
              </FormControl>
              <FormControl required>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder={info.phoneNo} type="password" name="password" />
              </FormControl>
           </form>
          </Box> */}
        </div>)
    
 }
  
export default UpdateForm;

