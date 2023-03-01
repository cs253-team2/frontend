import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/App";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
import Vendor from "./pages/vendor/App";
import NoPage from "./pages/error/App";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/vendor" element={<Vendor />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}