import { useEffect, useState } from "react"
import { getPayments } from "../payments-api"
import PaymentList from "../components/PaymentList";
import { useSearchParams } from "react-router-dom";

export default function PaymentsPage () {

    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)

    const [params, setParams] = useSearchParams();
    const ownerFilter = params.get("owner") ?? "";

    const changeOwnerFilter = (newFilter) => {
        params.set("owner", newFilter);
        setParams(params);
    }

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
            <div>Filter by owner
                <input
                    type="text"
                    value={ownerFilter}
                    onChange={(e) => changeOwnerFilter(e.target.value)}
                >

                </input>
            </div>
            {isLoading && <p>Wait</p>}
            {error && <p>Error!</p>}
            <PaymentList payments={payments}/>
        </div>
    )
}