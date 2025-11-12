import Container from "../Container/Container";
import logo from "../../assets/actify.png";
import logoWhite from "../../assets/actify-white.png";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import { FaDribbble, FaFacebookF, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const { theme } = useAuth();
    return (
        <footer className="footer-area py-10 lg:py-20">
            <Container>
                <div className="bg-white dark:bg-gray-900">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <img
                                    src={theme === "dark" ? logoWhite : logo}
                                    className="h-10 me-3"
                                    alt="Actify"
                                />
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-6 lg:gap-12 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Browse
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link
                                            to="/login"
                                            className="hover:underline"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            to="/"
                                            className="hover:underline"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            to="/upcoming-events"
                                            className="hover:underline"
                                        >
                                            Events
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            to="/register"
                                            className="hover:underline"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Explore
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link
                                            to="/create-event"
                                            className="hover:underline"
                                        >
                                            Create Event
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            to="/joined-event"
                                            className="hover:underline"
                                        >
                                            Joined Event
                                        </Link>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            to="/manage-events"
                                            className="hover:underline"
                                        >
                                            Manage Events
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Others
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a
                                            href="https://www.youtube.com/watch?v=_-AS5DtDeqs"
                                            target="_blank"
                                            className="hover:underline"
                                        >
                                            Watch Video
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <Link
                                            to="/event-detail/691226fb606878d76fa2f75b"
                                            className="hover:underline"
                                        >
                                            Popular Event
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2025{" "}
                            <a href="/" className="hover:underline">
                                Actify
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://x.com/"
                                target="_blank"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="https://github.com/sayhellomar"
                                target="_blank"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://dribbble.com"
                                target="_blank"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                            >
                                <FaDribbble />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
