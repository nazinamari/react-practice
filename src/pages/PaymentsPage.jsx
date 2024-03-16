import { useEffect, useState } from "react"
import { getPayments } from "../payments-api"
import PaymentList from "../components/PaymentList";

export default function PaymentsPage () {

    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true)
                const data = await getPayments();
                setPayments(data);
            } catch (error) {
                setError(true)
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, []);

    return (
        <div>
            <h1>Payments</h1>
            {isLoading && <p>Wait</p>}
            {error && <p>Error!</p>}
            <PaymentList payments={payments}/>
        </div>
    )
}