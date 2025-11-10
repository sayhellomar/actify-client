import Container from "../components/Container/Container";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const EditEvent = () => {
    const {loading} = useAuth();

    if(loading) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }
    
    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <section className="edit-event-area py-20 bg-actify-blue/30 mx-10 rounded-2xl">
            <Container>
                <div className="edit-event-inner grid place-items-center">
                    <div className="w-full max-w-[600px] p-4 bg-white rounded-2xl sm:p-6 md:p-12 dark:bg-gray-800">
                        <h5 className="text-3xl font-medium text-center font-bebas-neue text-gray-900 dark:text-white">
                            Edit Event
                        </h5>
                        <p className="text-sm text-center mt-2 mb-6">
                            Manage your beatiful events to make better.
                        </p>
                        <form className="space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="event_title"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Event Title
                                </label>
                                <input
                                    type="text"
                                    name="event_title"
                                    id="event_title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your title here"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="event_description"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Event Description
                                </label>
                                <textarea
                                    rows="4"
                                    name="event_description"
                                    id="event_description"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your description here"
                                    required
                                >
                                </textarea>
                            </div>

                            <div>
                                <label
                                    htmlFor="event_type"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Event Type
                                </label>
                                <select
                                    id="event_type"
                                    name="event_type"
                                    defaultValue=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="" disabled>
                                        Choose a event type
                                    </option>
                                    <option value="cleanup">Cleanup</option>
                                    <option value="plantation">
                                        Plantation
                                    </option>
                                    <option value="donation">Donation</option>
                                    <option value="food_distribution">
                                        Food Distribution
                                    </option>
                                    <option value="health_check_up">
                                        Health Check-up
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="event_image_url"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Event Image URL
                                </label>
                                <input
                                    type="text"
                                    name="event_image_url"
                                    id="event_image_url"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your photo URL here"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="event_location"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Event Location
                                </label>
                                <input
                                    type="text"
                                    name="event_location"
                                    id="event_location"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your photo URL here"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Event Date
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                        </svg>
                                    </div>
                                    <input
                                        datepicker="true"
                                        name="event_date"
                                        id="default-datepicker"
                                        datepicker-autohide="true"
                                        datepicker-min-date={new Date().toLocaleDateString()}
                                        type="text"
                                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Select date"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your email here"
                                    required
                                    disabled
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full actify-btn-pill"
                            >
                                Submit Changes
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default EditEvent;
