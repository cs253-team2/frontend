import axios from "axios";

export interface NotificationDataFieldsBackend {
  id: number
  timestamp: string
  subject: string
  content: string
  mark_as_read: boolean
  user: string
}

export interface NotificationDataFields {
  id: number
  date: string
  time: string
  subject: string
  content: string
}


export const getNotifications = async () => {
    const userID = localStorage.getItem("userid");
    const response = await axios.get<NotificationDataFieldsBackend[]>(
        `http://localhost:8000/api/users/${userID}/notifications/`,
        {
          withCredentials: true,
        }
    );
    // //console.log(response.data);

    const returnData : NotificationDataFields[] = [];
    let n = response.data.length;

    for (let i = 0; i < n; i++) {
        returnData[n - i - 1] = {
            id: response.data[i].id,
            date: response.data[i].timestamp.substring(0,10),
            time: response.data[i].timestamp.substring(11,19),
            subject: response.data[i].subject,
            content: response.data[i].content,
        };
        returnData[n - i - 1].date = returnData[n - i - 1].date.substring(8,10) + "/" + returnData[n - i - 1].date.substring(5,7) + "/" + returnData[n - i - 1].date.substring(0,4);
    }

    // //console.log(returnData[0].date + " " + returnData[0].time);
    // //console.log(returnData[1].date + " " + returnData[1].time);

    return returnData;
};