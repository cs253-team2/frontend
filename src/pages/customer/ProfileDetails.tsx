import React from 'react';
import profilePic from './components/default_profile_img.jpg';
import { Table } from '@mui/joy';
import { Paper } from '@mui/material';


interface User {
  name: string;
  userId: string;
  phone: string;
  email: string;
  pendingDues: number;
  currentBalance: number;
  profilePhotoUrl: string;
}

const profilePicture = {
  borderRadius: "50%",
  width: "230px",
}

const ProfileContainer = {
  display: "flex",
  flexDirection: "row",
  marginTop: "50px",
}

const ProfilePhotoContainter = {
  display: "flex",
  justifyContent: "center",
  alignItems : "center",
}

const ProfileDetails = {
  marginLeft:"10%",
}

const info = 
{
  name: 'Jack',
  userid: '21A4',
  email: 'jack@email.com',
  phoneNo: '1234567890',
  picture: profilePic,
  joiningDate: '1.3.2023',
  pendingDues: '500',
  walletBalance: '623',
};

const ProfilePage = () => {
  return (
    <div className="ProfileContainer" style={ProfileContainer}>
    <div className="ProfilePhoto" style={ProfilePhotoContainter}>
      <img style={profilePicture} src={info.picture} ></img>
    </div>
    <div className="ProfileDetails" style={ProfileDetails}>
      <Table>
          <tr>
            <td>
              <h2 style={{fontSize:"30px"}}>Name:</h2>
            </td>
            <td>
              <h3 style={{fontSize:"20px"}}>{info.name}</h3>
            </td>
            <td>
              <h2 style={{fontSize:"30px"}}>UserID:</h2>
            </td>
            <td>
              <h3 style={{fontSize:"20px"}}>{info.userid}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h2 style={{fontSize:"30px"}}>Phone Number:</h2>
            </td>
            <td>
              <h3 style={{fontSize:"20px"}}>{info.phoneNo}</h3>
            </td>
            <td>
              <h2 style={{fontSize:"30px"}}>Email ID:</h2>
            </td>
            <td>
              <h3 style={{fontSize:"20px"}}>{info.email}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h2 style={{fontSize:"30px"}}>Pending Dues:</h2>
            </td>
            <td>
              <h3 style={{fontSize:"20px"}}>{info.pendingDues}</h3>
            </td>
            <td>
              <h2 style={{fontSize:"30px"}}>Current Balance:</h2>
            </td>
            <td>
              <h3 style={{fontSize:"20px"}}>{info.walletBalance}</h3>
            </td>
          </tr>
      </Table>
  </div>
</div>
  );
};

export default ProfilePage;
