import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoPermission() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/"); 
    }, 2500);
    
   
    return (
        <div>
        <h1>403 - Not Authorized to Access</h1>
        </div>
    );
}
