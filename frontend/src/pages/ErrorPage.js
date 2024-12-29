import PageContent from "../components/PageContent.js";
import MainNavigation from "../components/MainNavigation.js";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    
    let title = 'An error occured!';
    let message = 'Something went wrong!'

    if (error.status === 500) {
        console.log(error.data);
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.';
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    );
}