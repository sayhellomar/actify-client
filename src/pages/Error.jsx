import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router";
import Container from "../components/Container/Container";

const Error = () => {
    return (
        <>
            <Header />
            <div className="text-center min-h-[calc(100vh-104px-449px)] bg-actify-blue/30 dark:bg-actify-blue/10 mx-5 2xl:mx-10 rounded-2xl py-10 lg:py-20 grid items-center">
                <Container>
                    <div>
                        <h3 className="text-6xl lg:text-8xl font-bold font-bebas-neue mb-5 dark:text-white">
                            Sorry, Page Not Found
                        </h3>
                        <h3 className="text-base lg:text-lg font-bold mb-10 dark:text-white">
                            We didn't find any page based on your request
                        </h3>
                        <Link className="actify-btn-pill" to="/">
                            Go Back to Homepage
                        </Link>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Error;
