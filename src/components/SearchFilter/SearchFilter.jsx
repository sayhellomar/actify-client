import { useEffect } from "react";
import Container from "../Container/Container";
import { initFlowbite } from "flowbite";

const SearchFilter = ({handleSearch, eventType}) => {
    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <section className="search-filter-area pt-20">
            <Container>
                <div className="search-filter flex items-center justify-between">
                    <form
                        className="flex items-center max-w-sm w-full"
                    >
                        <label htmlFor="simple-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="simple-search"
                                name="searchField"
                                onChange={handleSearch}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search event name"
                                required
                            />
                        </div>
                    </form>

                    <div className="max-w-xs w-full">
                        <select
                            id="event_type"
                            name="eventType"
                            onChange={handleSearch}
                            value={eventType}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="" disabled>
                                Filter By Categories
                            </option>
                            <option value="Cleanup">Cleanup</option>
                            <option value="Plantation">Plantation</option>
                            <option value="Donation">Donation</option>
                            <option value="Food Distribution">
                                Food Distribution
                            </option>
                            <option value="Health Check-up">
                                Health Check-up
                            </option>
                        </select>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SearchFilter;
