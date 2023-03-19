import axios from "axios";



export const getAllDues = async () => {

    const userID = localStorage.getItem("userid");

    const response = await axios.get(
        `http://localhost:8000/api/users/${userID}/pending_dues/`,
        {
            withCredentials: true,
        }
    );
    console.log("all dues data is: ");
    console.log(response.data);

    return response.data;
}