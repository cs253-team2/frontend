import axios from "axios";

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

export interface UserDataFields {
    userName: string;
    userID: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    userType: string;
}



export const getUserData = async () => {
    const userID = localStorage.getItem("userid");
    // //console.log("inside callback");
    // //console.log("user id is: " + userID);
    const response = await axios.get<UserDataFieldsBackend>(
        `http://localhost:8000/api/users/${userID}/`,
        {
            withCredentials: true,
        }
    );
    //console.log(response.data);

    const userData: UserDataFields = {
        userName: response.data.username,
        userID: response.data.user_id,
        email: response.data.email,
        phoneNumber: response.data.phone_number,
        password: "",
        confirmPassword: "",
        userType: response.data.type,
    };
    // //console.log("final data to be passed:");
    // //console.log(userData);
    return userData;
};

