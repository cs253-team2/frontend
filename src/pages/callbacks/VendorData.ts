import axios from "axios";

export interface Vendor {
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

export const getVendorData = async () => {
    console.log("inside callback");
    const response = await axios.get<Vendor[]>(
        "http://localhost:8000/api/users/2HL7YZK9/vendors/"
    );
    console.log(response.data);
    return response.data;
};



// getVendorData();