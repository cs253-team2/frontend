import axios from "axios";

interface LogoutData {
    message: string;
}

export const LogoutUser = async () => {
    console.log("inside logout");
    const response = await axios.post<LogoutData>(
        "http://localhost:8000/auth/logout/",
        {}
    );
    localStorage.removeItem("userid");
    localStorage.removeItem("type");
    console.log(response.data);
}