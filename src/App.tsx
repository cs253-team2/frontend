import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/signin";
import Register from "./pages/signin/register";
import VendorOverview from "./pages/vendor/Overview";
import NoPage from "./pages/error/App";

import Customer from "./pages/customer/App";
import Notifications from "./pages/customer/Notifications";
import AllduesCustomer from "./pages/customer/AllDues";
// import AllduesCustomer from "./pages/customer/alldues/Alldues";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vendor/overview" element={<VendorOverview />} />
        <Route path="/customer/overview" element={<Customer tabsel={'overview'} />} />
        <Route path="/customer/notifications" element={<Customer tabsel={'notifications'} />} />
        <Route path="/customer/alldues" element={<Customer tabsel={'alldues'} />} />
        <Route path="/customer/transaction_history" element={<Customer tabsel={'transaction_history'} />} />
        <Route path="/customer/vendor" element={<Customer tabsel={'vendors'} />} />
        <Route path="/customer/profile" element={<Customer tabsel={'profile'} />} />
        <Route path="/customer/settings" element={<Customer tabsel={'settings'} />} />
        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
  );
}