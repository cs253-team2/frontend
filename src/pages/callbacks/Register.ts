import axios from "axios";

export interface userRegistrationData {
    username: string;
    phone_number: string;
    email: string;
    password: string;
    confirm_password: string;
    type: string;
}

export interface userRegistrationResponse {
    username: string;
    phone_number: string;
    email: string;
    type: string;
}

export const registerUser = async (data: userRegistrationData) => {
    // //console.log("inside registration callback",data);
    const response = await axios.post<userRegistrationResponse>(
        "http://localhost:8000/auth/register/",
        data,
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        },
    );
    // //console.log(response.data);
    return response.data;
}