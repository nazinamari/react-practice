import { useEffect, useMemo, useState } from "react"
import { getPayments } from "../payments-api"
import PaymentList from "../components/PaymentList";
import { useSearchParams } from "react-router-dom";
import OwnerFilter from "../components/OwnerFilter/OwnerFilter";

export default function PaymentsPage () {

    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)

    const [params] = useSearchParams();
    const ownerFilter = params.get("owner") ?? "";

// const backLinkRef = useRef(location.state ?? "/payments");

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

    // const filteredMovies = movies.filter((movie) => 
    // movie.title.toLowerCase().includes(movieFilter.toLowerCase())
    // );

    const filteredPayments = useMemo(() => {
        return payments.filter((payment) =>
            payment.cardOwner.toLowerCase().includes(ownerFilter.toLowerCase())
        );
    }, [ownerFilter, payments]);

    return (
        <div>
            <h1>Payments</h1>
            {/* <Link to={}>Go back</Link> */}
            <OwnerFilter />
            {isLoading && <p>Wait</p>}
            {error && <p>Error!</p>}
            <PaymentList payments={filteredPayments}/>
        </div>
    )
}