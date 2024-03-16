import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPaymentById } from "../payments-api";

export default function PaymentsDetailPage () {
    const { paymentId } = useParams();
    const [payment, setPayment] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

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
            <h1>PaymentDetailsPage: {paymentId}</h1>
            {payment && <div>
                <p>Amount: {payment.amount}</p>
                <p>Number: {payment.cardNumber}</p>
                <p>Owner: {payment.cardOwner}</p>
                <p>Type: {payment.cardType}</p>
                <p>Description: {payment.description}</p>
            </div>
            }
            {isLoading && <p>Wait</p>}
            {error && <p>Error!</p>}
        </div>
    )
}