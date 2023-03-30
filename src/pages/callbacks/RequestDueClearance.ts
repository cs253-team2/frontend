import axios from 'axios';
import Cookie from 'js-cookie';

interface ResponseData {
    message: string;
}

export const requestDueClearance = async () => {
    console.log("callaed requestDueClearance");
    const user_id = localStorage.getItem('userid');
    const response = await axios.post<ResponseData>(
        `http://localhost:8000/api/users/${user_id}/request_clearance/`,
        {},
        {
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookie.get('csrftoken'),
            },
            withCredentials: true,
        },
    );
    console.log(response.data);
}
