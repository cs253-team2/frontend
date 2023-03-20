import axios from "axios";

export const clearDues = async () => {
    const user_id = localStorage.getItem("userid");
    const response = await axios.post(
        `http://localhost:8000/api/users/${user_id}/clear_dues/`,
        {
            withCredentials: true,
        },
    );

    //console.log(response.data);
}