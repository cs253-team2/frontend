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

export interface UpdateFormDataFields {
    userName: string;
    userID: string;
    email: string;
    phoneNumber: string;
}

export const getUserData = async () => {
    console.log("inside callback");
    const response = await axios.get<UserDataFieldsBackend>(
        "http://localhost:8000/api/users/4NSTXCZJ/"
    );
    console.log(response.data);

    const userData: UpdateFormDataFields = {
        userName: response.data.username,
        userID: response.data.user_id,
        email: response.data.email,
        phoneNumber: response.data.phone_number,
    };
    console.log("final data to be passed:");
    console.log(userData);
    return userData;
};

export const setUserData = async (userValues : UpdateFormDataFields) => {
    console.log("calling backend for update data");
    const response = await axios.put("http://localhost:8000/auth/update-profile/", userValues);
    console.log(response);
}