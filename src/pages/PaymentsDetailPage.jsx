import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getPaymentById } from "../payments-api";

export default function PaymentsDetailPage () {
    const { paymentId } = useParams();
    const [payment, setPayment] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const location = useLocation();
    // console.log(location);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true)
                const data = await getPaymentById(paymentId);
                setPayment(data);
            } catch (error) {
                setError(true)
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [paymentId])
    

    return (
        <div>
            {isLoading && <p>Wait</p>}
            {error && <p>Error!</p>}
            <h1>PaymentDetailsPage: {paymentId}</h1>
            <Link to={location.state}>Go Back</Link>
            {payment && <div>
                <p>Amount: {payment.amount}</p>
                <p>Number: {payment.cardNumber}</p>
                <p>Owner: {payment.cardOwner}</p>
                <p>Type: {payment.cardType}</p>
                <p>Description: {payment.description}</p>
            </div>
            }
            <ul>
                <li>
                    <NavLink to="client">Client</NavLink>
                </li>
                <li>
                    <NavLink to="reciept">Reciept</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
}