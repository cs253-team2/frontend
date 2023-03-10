import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/signin";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
import VendorOverview from "./pages/vendor/Overview";
import NoPage from "./pages/error/App";
import Register from "./pages/signin/RegisterPage";
import Customer from "./pages/customer/App";
import Vendor from "./pages/vendor/App";
import Notifications from "./pages/customer/Notifications";
import AllduesCustomer from "./pages/customer/AllDues";
// import AllduesCustomer from "./pages/customer/alldues/Alldues";
import ClearDues from "./pages/ClearDues/App"
import ClearDuesTest from "./pages/ClearDues/Checkout"


export default function App() {

  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/cleardues" element={<ClearDues />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/customer/overview" element={<Customer tabsel={'overview'} />} />
        <Route path="/customer/notifications" element={<Customer tabsel={'notifications'} />} />
        <Route path="/customer/alldues" element={<Customer tabsel={'alldues'} />} />
        <Route path="/customer/transaction_history" element={<Customer tabsel={'transaction_history'} />} />
        <Route path="/customer/vendor" element={<Customer tabsel={'vendors'} />} />
        <Route path="/customer/profile" element={<Customer tabsel={'profile'} />} />
        <Route path="/customer/update_profile" element={<Customer tabsel={'settings'} />} />
        <Route path="/vendor/overview" element={<Vendor  tabsel={'overview'}/>} />
        <Route path="/vendor/notifications" element={<Vendor  tabsel={'notifications'}/>} />
        <Route path="/vendor/alldues" element={<Vendor  tabsel={'alldues'}/>} />
        <Route path="/vendor/transaction_history" element={<Vendor  tabsel={'transaction_history'}/>} />
        <Route path="/vendor/customer" element={<Vendor  tabsel={'customers'}/>} />
        <Route path="/vendor/profile" element={<Vendor  tabsel={'profile'}/>} />
        <Route path="/vendor/update_profile" element={<Vendor  tabsel={'settings'}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/clearduestest" element={<ClearDuesTest />} />



        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
  );
}