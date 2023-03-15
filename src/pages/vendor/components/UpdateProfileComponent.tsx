import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import { Input, Select, Option} from '@mui/joy';
import { useNavigate } from 'react-router-dom';


type RegistrationFormProps = {
  onSubmit: (values: RegistrationFormValues) => void;
};

type RegistrationFormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
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
  const [values, setValues] = useState<RegistrationFormValues>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
   
  });

  const [errors, setErrors] = useState<Partial<RegistrationFormValues>>({});

  const validate = (values: RegistrationFormValues) => {
    const errors: Partial<RegistrationFormValues> = {};

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

    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    const userTypeInputElement = event.currentTarget.elements[0] as HTMLInputElement;
    setValues((prevValues) => ({
      ...prevValues,
      userType: userTypeInputElement.value,
    }));

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

  const navigate = useNavigate();
  const signinpage = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      </div>
      <div>
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
      </div>
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

      <br />
      <Button type="submit" fullWidth>
         Save Changes
      </Button>
    </form>
  );
};

export default RegistrationForm;