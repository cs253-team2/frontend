import axios from "axios";

export interface SessionData {
    message: string;
    user: string;
    type: string;
}

interface LoginData {
    username: string;
    password: string;
}

export const getLoggedInUser = async (data:LoginData) => {
    // //console.log("inside callback");
    // //console.log(data.username);
    const response = await axios.post<SessionData>(
        "http://localhost:8000/auth/login/",
        {
            username: data.username,
            password: data.password,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            withCredentials: true,
        },
    );
    // //console.log("response.request",response);
    // //console.log(response.data);
    return response.data;
}