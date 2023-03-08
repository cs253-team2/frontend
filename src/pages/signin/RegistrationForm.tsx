import React from 'react';
import { useForm, Controller} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//This is based on Yup
export default function RegistrationForm() {
    const formSchema = Yup.object().shape({
        firstName : Yup.string()
          .required('First name is mandatory'),
        phoneNumber : Yup.string()
          .required('Phone number is mandatory')
          .matches(
            /^[0-9]{10}$/,
            'Invalid Phone Number'
          ),
        emailID : Yup.string()
          .required('Email ID is mandatory')
          .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Invalid Email ID'
          ),
        password: Yup.string()
          .required('Password is mandatory')
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            'Invalid Password'
          ),
        confirmPwd: Yup.string()
          .required('Password is mendatory')
          .oneOf([Yup.ref('password')], 'Passwords does not match'),
      })
      const formOptions = { resolver: yupResolver(formSchema) }
      const { register, handleSubmit, reset, formState : {errors} } = useForm( {
        defaultValues: {
            firstName : '',
            lastName : '',
            phoneNumber : '',
            emailID : '',
            password : '',
            cnfpassword : '',
        }
      });

    return (
        <div>
            <form onSubmit={handleSubmit(console.log)}>
                <label>First Name *</label>
                <input  {...register("firstName")} className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First name" type="text" name="fname"/>
                {/* {errors.firstName && <p style={{color: "red"}}>Please enter the name</p>} */}

                <label>Last Name</label>
                <input {...register("lastName",  )} placeholder="Last name" type="text" name="lname"/>

                <label>Phone Number *</label>
                <input {...register("phoneNumber")} className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                placeholder="Phone number" type="text" name="phoneNumber" />
                {/* {errors.phoneNumber && <p style={{color : "red"}}>Invalid phone number</p>} */}

                <label>Email ID *</label>
                <input {...register("emailID")} className={`form-control ${errors.emailID ? 'is-invalid' : ''}`}
                placeholder="Email ID" type="text" name="emailID" />
                {/* {errors.emailID && <p style={{color : "red"}}>Invalid Email ID</p>} */}

                <label>Password *</label>
                <input {...register("password")} className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Password" type="password" name="password" />
                {/* {errors.password && <p style={{color : "red"}}>Invalid Password</p>} */}

                <label>Confirm Password *</label>
                <input {...register("cnfpassword")} className={`form-control ${errors.cnfpassword ? 'is-invalid' : ''}`}
                placeholder="Re-enter Password" type="password" name="cnfpassword" />
                {/* {errors.cnfpassword && <p style={{color : "red"}}>Passwords do not match</p>} */}

                <input type="submit"/>

            </form>
        </div>
    )
}