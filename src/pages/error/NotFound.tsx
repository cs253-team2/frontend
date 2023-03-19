import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/"); 
    }, 3000);
    
   
    return (
        <div>
        <h1>404 - Page Not Found</h1>
        </div>
    );
}

