import axios from "axios";

export interface TransactionHistoryDataFieldsBackend {
    transaction_id: string
    timestamp: string
    transaction_amount: string
    transaction_status: number
    sender: string
    receiver: string
}

export interface TransactionHistoryDataFields {
    receiverID: string
    date: string
    status: string
    transactionID: string
    amount: string
}

export const getTransactions = async (userid: string|null) => {
    const response = await axios.get<TransactionHistoryDataFieldsBackend[]>(
        `http://localhost:8000/api/users/${userid}/transactions/`,
        {
            withCredentials: true,
        },
    );
    // //console.log("transaction history data is (in callback): ", response.data);
    const returnData : TransactionHistoryDataFields[] = [];
    let n = response.data.length;

    for (let i = 0; i < n; i++) {
        returnData[n - i - 1] = {
            date: response.data[i].timestamp.substring(0,10),
            status: response.data[i].transaction_status === 0 ? 'Paid' : (response.data[i].transaction_status === 1 ? 'Failed' : 'Pending'),
            transactionID: response.data[i].transaction_id,
            amount: response.data[i].transaction_amount,
            receiverID: response.data[i].sender,
        };
        returnData[n - i - 1].date = returnData[n - i - 1].date.substring(8,10) + "/" + returnData[n - i - 1].date.substring(5,7) + "/" + returnData[n - i - 1].date.substring(0,4);
    }
    // //console.log("returnData is ",returnData);
    return returnData;
}
  
 