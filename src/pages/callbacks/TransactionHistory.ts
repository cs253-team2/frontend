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

export const getTransactionHistory = async () => {
    // localStorage.getItem("userid");
    const userID = localStorage.getItem("userid");
    console.log("userID is ", userID);
    console.log("inside transaction history callback");
    const response = await axios.get<TransactionHistoryDataFieldsBackend[]>(
        `http://localhost:8000/api/users/${userID}/transactions/`,
        {
            withCredentials: true,
        }
    );
    console.log("transaction history data is (in callback): ");
    console.log(response.data);
    // console.log("transaction history timestamp is: " + response.data[0].timestamp);
    // const date = response.data[3].timestamp.substring(0,10);
    // console.log("date is: " + date);
    // const time = response.data[3].timestamp.substring(11,19);
    // console.log("time is: " + time);

    // console.log("receiver is : " + response.data[1].receiver);

    const returnData : TransactionHistoryDataFields[] = [];
    let n = response.data.length;

    for (let i = 0; i < n; i++) {
        returnData[n - i - 1] = {
            receiverID: response.data[i].receiver,
            date: response.data[i].timestamp.substring(0,10),
            status: response.data[i].transaction_status === 0 ? 'Paid' : (response.data[i].transaction_status === 1 ? 'Failed' : 'Pending'),
            transactionID: response.data[i].transaction_id,
            amount: response.data[i].transaction_amount,
        };
        returnData[n - i - 1].date = returnData[n - i - 1].date.substring(8,10) + "/" + returnData[n - i - 1].date.substring(5,7) + "/" + returnData[n - i - 1].date.substring(0,4);
    }
    // console.log(returnData);
    return returnData;
};