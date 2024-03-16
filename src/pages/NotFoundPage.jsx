import { Link } from "react-router-dom";

export default function NotFoundPage () {
    return (
        <div>
            <b>Page not found</b>
            <Link to="/">Back to home page!</Link>
        </div>
    )
}