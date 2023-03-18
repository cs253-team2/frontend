import axios from "axios";

export interface TransactionHistoryDataFieldsBackend {
    transaction_id: string
    timestamp: string
    transaction_amount: string
    transaction_status: number
    sender: number
    receiver: number
}

export const getTransactionHistory = async () => {
    console.log("inside transaction history callback");
    const response = await axios.get<TransactionHistoryDataFieldsBackend[]>(
        "http://localhost:8000/api/users/2HL7YZK9/transactions/"
    );
    console.log(response.data);
    return response.data;
};