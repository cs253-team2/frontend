import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
import VendorOverview from "./pages/vendor/Overview";
import NoPage from "./pages/error/App";
import CustomerOverview from "./pages/customer/App";
import Notifications from "./pages/customer/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/vendor/overview" element={<VendorOverview />} />
        <Route path="/customer/overview" element={<CustomerOverview />} />
        <Route path="/customer/notifications" element={<Notifications />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}