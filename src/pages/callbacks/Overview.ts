import axios from 'axios';

interface OverviewNavbarFieldsBackend {
    balance: number;
    pending_dues: number;
}

export interface OverviewNavbarFields {
    balance: number;
    pendingDues: number;
}

interface TransactionsDataBackend {
    recent_transactions: RecentTransactions
}
  
interface RecentTransactions {
    transactions_vendor: TransactionsVendorBackend[]
    transactions_non_vendor: TransactionsNonVendorBackend[]
}
  
interface TransactionsVendorBackend {
    transaction_id: string
    timestamp: string
    transaction_amount: string
    transaction_status: number
    sender: number
    receiver: number
}

interface TransactionsNonVendorBackend {
    transaction_id: string
    timestamp: string
    transaction_amount: string
    transaction_status: number
    sender: number
    receiver: number
}

export interface TransactionsDataOverviewPage {
    recentTransactions: RecentTransactionsOverviewPage
}

interface RecentTransactionsOverviewPage {
    transactionsVendor: TransactionsVendorOverviewPage[]
    transactionsNonVendor: TransactionsNonVendorOverviewPage[]
}

export interface TransactionsVendorOverviewPage {
    transactionID: string
    time: string
    date: string
    transactionAmount: string
    transactionStatus: number
    senderID: number
    receiverID: number
}

export interface TransactionsNonVendorOverviewPage {
    transactionID: string
    time: string
    date: string
    transactionAmount: string
    transactionStatus: number
    senderID: number
    receiverID: number
}

export const getOverviewNavbarData = async () => {
    const userID = localStorage.getItem('userid');
    const response = await axios.get<OverviewNavbarFieldsBackend>(
        `http://localhost:8000/api/users/${userID}/navbar/`,
        {
            withCredentials: true,
        }
    );
    const returnData: OverviewNavbarFields = {
        balance: response.data.balance,
        pendingDues: response.data.pending_dues,
    };
    return returnData;
}

export const getOverviewRecentTransactions = async () => {
    const userID = localStorage.getItem('userid');
    const response = await axios.get<TransactionsDataBackend>(
        `http://localhost:8000/api/users/${userID}/overview/`,
        {
            withCredentials: true,
        }
    );

    //console.log(response.data.recent_transactions.transactions_vendor[0].timestamp);

    const returnData: TransactionsDataOverviewPage = {
        recentTransactions: {
            transactionsVendor: response.data.recent_transactions.transactions_vendor.map((transaction) => {
                return {
                    transactionID: transaction.transaction_id,
                    time: transaction.timestamp.split('T')[1].split('.')[0],
                    date: transaction.timestamp.split('T')[0],
                    transactionAmount: transaction.transaction_amount,
                    transactionStatus: transaction.transaction_status,
                    senderID: transaction.sender,
                    receiverID: transaction.receiver,
                }
            }),
            transactionsNonVendor: response.data.recent_transactions.transactions_non_vendor.map((transaction) => {
                return {
                    transactionID: transaction.transaction_id,
                    time: transaction.timestamp.split('T')[1].split('.')[0],
                    date: transaction.timestamp.split('T')[0],
                    transactionAmount: transaction.transaction_amount,
                    transactionStatus: transaction.transaction_status,
                    senderID: transaction.sender,
                    receiverID: transaction.receiver,
                }
            }),
        }
    };

    //console.log(returnData);
    return returnData;

}