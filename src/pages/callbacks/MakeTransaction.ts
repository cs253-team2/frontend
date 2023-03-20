import axios from 'axios';
import { getCookie } from './getCookie';

export interface InstantTransactionData {
    sender: string
    receiver: string
    transaction_amount: number
    transaction_status: number
}

export interface PaymentFormValues {
    receiverID: string
    password: string
    amount: number
    transactionType: number
};

export const makeTransaction = async (data: PaymentFormValues) => {
    const userID = localStorage.getItem("userid");
    const CSRFToken = getCookie("csrftoken");
    const headers = {
        'Content-Type': 'application/json',  //specifies the format of data
        // 'Access-Control-Allow-Origin': '*',
        'X-CSRFToken': CSRFToken,
    };

    const response = await axios.post(
        `http://localhost:8000/api/users/${userID}/transactions/make/`, 
        {
            receiver_id: data.receiverID,
            transaction_amount: data.amount,
            transaction_status: data.transactionType,
        },
        { 
            headers: headers,
            withCredentials: true,
        },
    ).then((response) => {console.log(response)}).catch((error) => {console.log(error)});
}