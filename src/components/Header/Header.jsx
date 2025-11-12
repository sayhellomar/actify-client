import Container from "../Container/Container";
import logo from "../../assets/actify.png";
import logoWhite from "../../assets/actify-white.png";
import { Link, useNavigate } from "react-router";
import NavHref from "../NavHref/NavHref";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import "./Header.css";
import Spinner from "../Spinner/Spinner";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
    const { user, loading, signOutUser, theme, setTheme } = useAuth();
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    // const [theme, setTheme] = useState(localStorage.getItem('theme') || false);
    const navigate = useNavigate();

    const handleShowUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };

    const handleLogout = () => {
        signOutUser().then(() => {
            navigate("/login");
        });
    };

    const handleThemeSwitch = () => {
        setTheme(!theme);
    };

    useEffect(() => {
        const html = document.querySelector('html');
        html.classList.remove('light', 'dark');
        html.classList.add(theme ? 'dark' : 'light');
        localStorage.setItem('theme', theme ? 'dark' : 'light');
    }, [theme])

    return (
        <>
            <header className="header-area bg-white dark:bg-gray-900">
                <Container>
                    <div className="header">
                        <nav className="">
                            <div className="flex flex-wrap items-center justify-between mx-auto py-6">
                                <Link
                                    to="/"
                                    className="flex items-center space-x-3 rtl:space-x-reverse"
                                >
                                    <img
                                        src={theme ? logoWhite : logo}
                                        className="h-11"
                                        alt="Actify Logo"
                                    />
                                </Link>
                                <button
                                    data-collapse-toggle="navbar-default"
                                    type="button"
                                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    aria-controls="navbar-default"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 17 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1h15M1 7h15M1 13h15"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="hidden w-full md:block md:w-auto"
                                    id="navbar-default"
                                >
                                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                        <NavHref link="/">Home</NavHref>
                                        <NavHref link="upcoming-events">
                                            Upcoming Events
                                        </NavHref>
                                        {loading ? (
                                            <Spinner />
                                        ) : user ? (
                                            <>
                                                <NavHref link="create-event">
                                                    Create Event
                                                </NavHref>
                                                <NavHref link="joined-event">
                                                    Joined Event
                                                </NavHref>
                                                <NavHref link="manage-events">
                                                    Manage Events
                                                </NavHref>
                                                <div className="relative">
                                                    <button
                                                        onClick={
                                                            handleShowUserDropdown
                                                        }
                                                        type="button"
                                                        className="flex text-sm rounded-full md:me-0 cursor-pointer"
                                                        id="user-menu-button"
                                                    >
                                                        <span className="sr-only">
                                                            Open user menu
                                                        </span>
                                                        <img
                                                            className="w-14 h-14 rounded-full object-cover"
                                                            src={user?.photoURL}
                                                            alt={
                                                                user?.displayName
                                                            }
                                                        />
                                                    </button>

                                                    <div
                                                        className={`${
                                                            showUserDropdown &&
                                                            `show-dropdown`
                                                        } z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600`}
                                                    >
                                                        <div className="px-4 py-3">
                                                            <span className="block text-sm text-gray-900 dark:text-white">
                                                                {
                                                                    user?.displayName
                                                                }
                                                            </span>
                                                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                                                                {user?.email}
                                                            </span>
                                                        </div>
                                                        <ul className="py-2">
                                                            <li>
                                                                <Link
                                                                    to="/create-event"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                >
                                                                    Create Event
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="/joined-event"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                >
                                                                    Joined Event
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="/manage-events"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                >
                                                                    Manage Event
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <NavHref>
                                                    <button
                                                        onClick={handleLogout}
                                                        type="button"
                                                        className="actify-btn-pill"
                                                    >
                                                        Logout
                                                    </button>
                                                </NavHref>
                                            </>
                                        ) : (
                                            <>
                                                <NavHref link="login">
                                                    <button
                                                        type="button"
                                                        className="actify-btn-pill"
                                                    >
                                                        Login
                                                    </button>
                                                </NavHref>
                                            </>
                                        )}
                                        <li className="leading-none">
                                            <button
                                                className="cursor-pointer dark:text-white"
                                                onClick={handleThemeSwitch}
                                            >
                                                {theme ? (
                                                    <MdLightMode size="1.3em" />
                                                ) : (
                                                    <MdDarkMode size="1.3em" />
                                                )}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
