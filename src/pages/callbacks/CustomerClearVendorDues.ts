import axios from 'axios';
import Cookie from 'js-cookie';

export const clearVendorDue = async (vendor_id: string) => {

    const user_id = localStorage.getItem('userid');
    const response = await axios.post(
        `http://localhost:8000/api/users/${user_id}/clear_vendor_dues/`,
        {
            receiver_id: vendor_id,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookie.get('csrftoken'),
            },
            withCredentials: true,
        },
    ).then((response) => {
        console.log(response);
        if (response.status === 200) {
            alert('Dues Cleared Successfully.');
        }

    })
    .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 500) {
            alert('Dues could not be cleared.');
        }
    })
    ;
        
    
}