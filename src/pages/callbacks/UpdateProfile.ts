import axios from "axios";
import Cookie from "js-cookie";

export interface UserDataFieldsBackend {
    user_id: string;
    password: string;
    last_login?: any;
    type: string;
    username: string;
    email: string;
    phone_number: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    is_vendor: boolean;
    is_customer: boolean;
    groups: any[];
    user_permissions: any[];
}

export interface UpdateFormDataFields {
    userName: string;
    userID: string;
    email: string;
    phoneNumber: string;
}

export const getUserData = async () => {
    // //console.log("inside callback");
    const userID = localStorage.getItem("userid");
    // //console.log(userID);
    const response = await axios.get<UserDataFieldsBackend>(
        `http://localhost:8000/api/users/${userID}/`,
        {
            withCredentials: true,
        }
    );
    //console.log(response.data);

    const userData: UpdateFormDataFields = {
        userName: response.data.username,
        userID: response.data.user_id,
        email: response.data.email,
        phoneNumber: response.data.phone_number,
    };
    // //console.log("final data to be passed:");
    // //console.log(userData);
    return userData;
};

export const setUserData = async (userValues : UpdateFormDataFields) => {

    // //console.log(userValues);

    const CSRFToken = Cookie.get("csrftoken");
    // //console.log("CSRF Token is :");
    // //console.log(CSRFToken);

    const headers = {
        'Content-Type': 'application/json',  //specifies the format of data
        // 'Access-Control-Allow-Origin': '*',
        'X-CSRFToken': CSRFToken,
    };

    // //console.log("calling backend for update data");
    const response = await axios.put(
        `http://localhost:8000/auth/update-profile/`, 
        {
            user_id: userValues.userID,
            username: userValues.userName,
            email: userValues.email,
            phone_number: userValues.phoneNumber,
        },
        { 
            headers: headers,
            withCredentials: true,
        },
    ).then((response) => {
       console.log(response);
       return response.status
    }).catch((error) => {
        console.log(error)});

    
}