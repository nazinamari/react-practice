import { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
const HomePage = lazy(() => import("../../pages/HomePage"));
const PaymentsPage = lazy(() => import("../../pages/PaymentsPage"));
const PaymentsDetailPage = lazy(() => import("../../pages/PaymentsDetailPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const ClientInfo = lazy(() => import("../UserClientInfo/ClientInfo"));
const PaymentReciept = lazy(() => import("../PaymentReceipt/PaymentReciept"));

export default function App () {
    return (
        <div>
            <Navigation/>

            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/payments" element={<PaymentsPage />} />
                    <Route path="/payments/:paymentId" element={<PaymentsDetailPage />}>
                        <Route path="client" element={<ClientInfo />}/>
                        <Route path="reciept" element={<PaymentReciept />}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>} />
                </Routes>
            </Suspense>
        </div>
    );
}

// import HomePage from "../../pages/HomePage";
// import PaymentsPage from "../../pages/PaymentsPage";
// import NotFoundPage from "../../pages/NotFoundPage";
// import PaymentsDetailPage from "../../pages/PaymentsDetailPage";
// import ClientInfo from "../UserClientInfo/ClientInfo";
// import PaymentReciept from "../PaymentReceipt/PaymentReciept";