import axios from "axios";

export interface TransactionData {
    transaction_id: string
    timestamp: string
    transaction_amount: string
    transaction_status: number
    sender: number
    receiver: number
  }

export const getTransactions = async (userid: string|null) => {
    const response = await axios.get<TransactionData[]>(
        `http://localhost:8000/api/users/${userid}/transactions/`,
        {
            withCredentials: true,
        },
    );
    console.log(response.data);
    return response.data;
}
  
 