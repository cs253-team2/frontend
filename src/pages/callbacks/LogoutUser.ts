import axios from "axios";
import Cookies from "js-cookie";

interface LogoutData {
    message: string;
}

export const LogoutUser = async () => {
    console.log("inside logout");
    const response = await axios.post<LogoutData>(
        "http://localhost:8000/auth/logout/",
        {
            withCredentials: true,
        },
    );
    localStorage.removeItem("userid");
    localStorage.removeItem("type");
    Cookies.remove("csrftoken", { path: "/" });
    Cookies.remove("sessionid", { path: "/" , domain: "localhost"});
    console.log(response.data);
}