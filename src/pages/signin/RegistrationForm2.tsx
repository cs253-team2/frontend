import React from 'react';
import { useForm, Controller} from 'react-hook-form';

//This is based on useForm


export default function RegistrationForm() {
    const { register, handleSubmit, formState : {errors} } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
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
                <input {...register("firstName", { required: true })} placeholder="First name" type="text" name="fname"/>
                {errors.firstName && <p style={{color: "red"}}>Please enter the name</p>}

                <label>Last Name</label>
                <input {...register("lastName",  )} placeholder="Last name" type="text" name="lname"/>

                <label>Phone Number *</label>
                <input {...register("phoneNumber", {
                    required: true, 
                    pattern: /^[0-9]{10}$/ })} 
                placeholder="Phone number" type="text" name="phoneNumber" />
                {errors.phoneNumber && <p style={{color : "red"}}>Invalid phone number</p>}

                <label>Email ID *</label>
                <input {...register("emailID", {
                    required: true, 
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} 
                placeholder="Email ID" type="text" name="emailID" />
                {errors.emailID && <p style={{color : "red"}}>Invalid Email ID</p>}

                <label>Password *</label>
                <input {...register("password", {
                    required: true, 
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} 
                placeholder="Password" type="text" name="password" />
                {errors.password && <p style={{color : "red"}}>Invalid Password</p>}

                <label>Confirm Password *</label>
                <input {...register("cnfpassword", {
                    required: true, 
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ })} 
                placeholder="Re-enter Password" type="text" name="cnfpassword" />
                {errors.cnfpassword && <p style={{color : "red"}}>Passwords do not match</p>}

                <input type="submit"/>

            </form>
        </div>
    )
}