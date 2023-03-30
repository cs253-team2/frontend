import axios from "axios";

export interface Customer {
    user_id: string;
    password: string;
    last_login?: any;
    type: string;
    username: string;
    email: string;
    phone_number: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    is_vendor: boolean;
    is_customer: boolean;
    groups: any[];
    user_permissions: any[];
}

export const getCustomerData = async () => {
    const userID = localStorage.getItem("userid");
    const response = await axios.get<Customer[]>(
        `http://localhost:8000/api/users/${userID}/customers/`,
        {
            withCredentials: true,
        }
    );
    return response.data;
};



