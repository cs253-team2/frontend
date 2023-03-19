import axios from "axios";

export interface PendingDues {
    pending_dues: PendingDue[]
}
  
export interface PendingDue {
    receiver_name: string
    receiver_id: string
    receiver_email: string
    dues: number
}

export const getPendingDues = async () => {
    const userID = localStorage.getItem("userid");
    const response = await axios.get<PendingDues>(
        `http://localhost:8000/api/users/${userID}/pending_dues/`,
        {
            withCredentials: true,
        }
    );
    const returnData: PendingDue[] = response.data.pending_dues;
    return returnData;
}

