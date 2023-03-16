import axios from "axios";

export interface Notification {
  id: number;
  timestamp: Date;
  subject: string;
  content: string;
  mark_as_read: boolean;
  user: string;
}


export const getNotifications = async () => {
    const response = await axios.get<Notification[]>(
        "http://localhost:8000/api/notifications/"
    );
    console.log(response.data);
    return response.data;
};