import { useSearchParams } from "react-router-dom";

export default function OwnerFilter() {

    const [params, setParams] = useSearchParams();
    const ownerFilter = params.get("owner") ?? ""; 

    const changeOwnerFilter = (newFilter) => {
        params.set("owner", newFilter);
        setParams(params);
    };

    return (
        <div>Filter by owner
            <form>
                <input
                    type="text"
                    value={ownerFilter}
                    onChange={(e) => changeOwnerFilter(e.target.value)}
                >

                </input>
            </form>
        </div>
    )
}