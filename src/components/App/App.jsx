import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import PaymentsPage from "../../pages/PaymentsPage";
import NotFoundPage from "../../pages/NotFoundPage";
import PaymentsDetailPage from "../../pages/PaymentsDetailPage";
import ClientInfo from "../UserClientInfo/ClientInfo";

export default function App () {
    return (
        <div>
            <Navigation/>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="/payments/:paymentId" element={<PaymentsDetailPage />}>
                    <Route path="client" element={<ClientInfo />}/>
                    <Route path="subpage-b" element={<div>Subpage B</div>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </div>
    );
}