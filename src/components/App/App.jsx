import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import PaymentsPage from "../../pages/PaymentsPage";
import NotFoundPage from "../../pages/NotFoundPage";

export default function App () {
    return (
        <div>
            <Navigation/>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </div>
    );
}