import {
    Autocomplete,
    Button,
    Card,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
  import { Profile } from "./Profile";

  function ProfileEdit() {
    const [ProfileData, setProfileData] = useState<Profile>({ ID: 0 } as Profile);
    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm<Profile>({
      defaultValues: ProfileData,
      });
    const [dept, setDept] = useState<any>("");
    const [deptSec, setDeptSec] = useState<any>("");

    return (
        <div>
            <h1> HI!</h1>
            <Grid container spacing={5} sx={{ padding: 3 }}>
                <Grid item xs={12} sm={6}>
                  <p>First Name *</p>
                  <TextField
                    fullWidth
                    type="text"
                    id="standard-basic"
                    variant="standard"
                    error= {!!errors.firstName}
                    helperText={
                        errors.firstName ? "First Name is mandatory!" : ""
                    }
                    {...register("firstName", {minLength: 1})}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <p>Last Name</p>
                  <TextField
                    fullWidth
                    type="text"
                    id="standard-basic"
                    variant="standard"
                    {...register("lastName")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <p>Phone Number *</p>
                  <TextField
                    fullWidth
                    type="text"
                    id="standard-basic"
                    variant="standard"  
                    error={!!errors.phoneNumber}
                    helperText={
                      errors.phoneNumber ? "Contact No. must contain 10 digits!" : ""
                    }
                    {...register("firstName", {
                        pattern : /^[0-9]{10}$/
                    })}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <p>Email ID *</p>
                  <TextField
                    fullWidth
                    type="text"
                    id="standard-basic"
                    variant="standard"
                    helperText={
                        errors.emailID ? "First Name is mandatory!" : ""
                    }
                    {...register("emailID", {
                        pattern : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                    {...register("firstName")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <p>Password *</p>
                  <TextField
                    fullWidth
                    type="text"
                    id="standard-basic"
                    variant="standard"
                    {...register("firstName")}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <p>Confirm Password *</p>
                  <TextField
                    fullWidth
                    type="text"
                    id="standard-basic"
                    variant="standard"
                    {...register("firstName")}
                  />
                </Grid>
            </Grid>
        </div>
    )

}

export default ProfileEdit