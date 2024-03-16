import { useParams } from "react-router-dom";

export default function PaymentsDetailPage () {
    const { paymentId } = useParams();

    return (
        <div>
            <h1>PaymentDetailsPage: {paymentId}</h1>
        </div>
    )
}