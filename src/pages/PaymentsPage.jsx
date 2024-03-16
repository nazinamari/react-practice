import { useEffect } from "react"
import { getPayments } from "../payments-api"

export default function PaymentsPage () {

    useEffect(() => {
        async function getData() {
            try {
                const data = await getPayments();
            } catch (error) {}
        }
            getData();
    }, []);
    return (
        <div>

        </div>
    )
}