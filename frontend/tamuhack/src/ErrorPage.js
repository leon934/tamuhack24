import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops. Something went wrong.</h1>
            <h3>{error.statusText || error.message}</h3>
        </div>
    )
}
export default ErrorPage;