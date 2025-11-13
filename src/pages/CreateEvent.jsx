import Container from "../components/Container/Container";
import { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CreateEvent = () => {
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("18:00");
    const { user, loading } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }
    useEffect(() => {
        initFlowbite();
    }, []);

    const handleCreateEvent = (e) => {
        e.preventDefault();
        const form = e.target;
        const eventTitle = form.event_title.value;
        const eventDescription = form.event_description.value;
        const eventType = form.event_type.value;
        const eventImageUrl = form.event_image_url.value;
        const eventLocation = form.event_location.value;
        const eventDate = form.event_date.value;
        const eventStartTime = form.event_start_time.value;
        const eventEndTime = form.event_end_time.value;
        const email = form.email.value;

        const [month, day, year] = eventDate.split('/');
        const formatedDate = `${year}-${month}-${day}T00:00:00Z`;

        axiosSecure.post('/events', {
            eventTitle,
            eventDescription,
            eventType,
            eventImageUrl,
            eventLocation,
            eventDate:formatedDate,
            eventStartTime,
            eventEndTime,
            email,
        })
        .then(res => {
            if(res.data.insertedId) {
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your event created successfully",
                    showConfirmButton: false,
                    timer: 3500,
                });
                navigate('/upcoming-events');
            }
        })
        .catch(error => {
            console.log(error);
        })
    };



    return (
        <section className="create-event-area py-10 lg:py-20 bg-actify-blue/30 dark:bg-actify-blue/10 mx-5 2xl:mx-10 rounded-2xl">
            <Container>
                <div className="create-event-inner grid place-items-center">
                    <div className="w-full max-w-[600px] p-8 bg-white rounded-2xl md:p-12 dark:bg-gray-900">
                        <h5 className="text-3xl font-medium text-center font-bebas-neue text-gray-900 dark:text-white">
                            Create Event
                        </h5>
                        <p className="text-sm text-center mt-2 mb-6 dark:text-gray-300">
                            Create your own event to make some changes on the
                            world!
                        </p>
                        <form
                            className="space-y-6"
                            onSubmit={handleCreateEvent}
                        >
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
                                ></textarea>
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
                                    <option value="Cleanup">Cleanup</option>
                                    <option value="Plantation">
                                        Plantation
                                    </option>
                                    <option value="Donation">Donation</option>
                                    <option value="Food Distribution">
                                        Food Distribution
                                    </option>
                                    <option value="Health Check-up">
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
                                    placeholder="Enter your event location here"
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

                            <div className="flex gap-2">
                                <div className="w-full">
                                    <label
                                        htmlFor="start-time"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Start time:
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="time"
                                            name="event_start_time"
                                            id="start-time"
                                            value={startTime}
                                            onChange={(e) =>
                                                setStartTime(e.target.value)
                                            }
                                            required
                                            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <label
                                        htmlFor="end-time"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        End time:
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                            <svg
                                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="time"
                                            name="event_end_time"
                                            id="end-time"
                                            value={endTime}
                                            onChange={(e) =>
                                                setEndTime(e.target.value)
                                            }
                                            required
                                            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
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
                                    defaultValue={user.email}
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
                                Create Event
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CreateEvent;
