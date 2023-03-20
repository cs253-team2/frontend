import axios from 'axios';
import { getCookie } from "./getCookie";

export const addMoneyToWallet = async (data: number) => {
    const userID = localStorage.getItem("userid");
    const CSRFToken = getCookie("csrftoken");

    const headers = {
        'Content-Type': 'application/json',  //specifies the format of data
        // 'Access-Control-Allow-Origin': '*',
        'X-CSRFToken': CSRFToken,
    };

    const response = await axios.post(
        `http://localhost:8000/api/users/${userID}/add_balance/`,
        {
            amount: data,
        },
        {
            headers: headers,
            withCredentials: true,
        }
    ).then((response) => {}).catch((error) => { console.log(error) });
}