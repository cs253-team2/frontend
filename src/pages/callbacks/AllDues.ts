import axios from "axios";

export interface DuesDataFieldsBackend {
    receiver_name : string
    receiver_id : string
    dues : number
}

export interface DuesDataFields {
    receiverName: string;
    receiverID: string;
    dues: number;
}

export const getAllDues = async () => {

    const userID = localStorage.getItem("userid");

    const response = await axios.get<DuesDataFieldsBackend[]>(
        `http://localhost:8000/api/users/${userID}/pending_dues/`,
        {
            withCredentials: true,
        }
    );
    console.log("all dues data is (inside callback): ");
    console.log(response.data);

    const returnData : DuesDataFields[] = [];

    console.log("length of the response data is (inside callback): ");
    console.log(response.data);

    for(let i = 0; i < response.data.length; i++) {
        returnData[i] = {
            receiverName: response.data[i].receiver_name,
            receiverID: response.data[i].receiver_id,
            dues: response.data[i].dues,
        };
        console.log("returnData[i] is (inside callback): ");
        console.log(returnData[i]);
    }

    console.log("return data is (inside callback): ");
    console.log(returnData);

    return returnData;
}