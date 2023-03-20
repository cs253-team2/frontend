import axios from "axios";

export interface PendingDues {
    pending_dues: PendingDue[]
}
  
export interface PendingDue {
    sender_name: string
    sender_id: string
    sender_email: string
    dues: number
}

export const getPendingDues = async () => {
    const userID = localStorage.getItem("userid");
    const response = await axios.get<PendingDues>(
        `http://localhost:8000/api/users/${userID}/pending_dues_vendor/`,
        {
            withCredentials: true,
        }
    );
    const returnData: PendingDue[] = response.data.pending_dues;
    return returnData;
}

