export default function Validate(
                                data : {
                                    firstName: string,
                                    lastName: string,
                                    phoneNumber: string,
                                    email: string,
                                    password: string,
                                    cnfpassword: string,
                                    role: string,
                                    persistent: HTMLInputElement,
                                }
                            ) 
{
    let error = {
        phoneNumber: "",
        email: "",
        password: "",
        cnfpassword: "",
    }
    const email_pattern = /^[^\s]+@+[^\s]+\.+[^\s]$/ //email must contain @ and .
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/ //password must contain at least 1 digit, 1 uppercase, 1 lower case and length between 8 and 15
    const phoneNo_pattern = /^[0-9]{10}$/ //phone number must be 10 digit long and should only contain numbers

    if(!phoneNo_pattern.test(data.phoneNumber)) {
        error.phoneNumber = "Invalid Phone Number"
    }
    if(!email_pattern.test(data.email)) {
        error.email = "Invalid Email ID"
    }
    if(!password_pattern.test(data.password)) {
        error.password = "Password must contain at least 1 digit, 1 uppercase, 1 lowercase and minimum 8 characters long"
    }
    if(data.cnfpassword !== data.password) {
        error.cnfpassword = "Password doesn't match"
    }

    return error;
}