import { useLoaderData, useLocation, useNavigate } from "react-router";
import Container from "../components/Container/Container";
import Jumbortron from "../components/Jumbortron/Jumbortron";
import EventTime from "../utilities/EventTime";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Spinner from "../components/Spinner/Spinner";

const EventDetails = () => {
    const [isUserJoinedEvent, setIsUserJoinedEvent] = useState([]);
    const { user, loading } = useAuth();
    const event = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();
    const axios = useAxios();

    const {
        _id,
        eventTitle,
        eventDescription,
        eventType,
        eventImageUrl,
        eventLocation,
        eventDate,
        eventStartTime,
        eventEndTime,
        email,
    } = event;

    const formattedDate = eventDate.split("T")[0];

    useEffect(() => {
        axios.get(`/joined-event/${_id}`).then((res) => {
            const joinedUser = res.data;
            const userEmail = joinedUser.filter(
                (singleJoinedUser) =>
                    singleJoinedUser.user_email === user?.email
            );
            setIsUserJoinedEvent(userEmail);
        });
    }, [axios, user]);


    if (loading) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    const handleJoinEvent = () => {
        if (!user) {
            navigate("/login", { state: location.pathname });
        } else {
            axios
                .post("/joined-event", {
                    eventId: _id,
                    user_email: user?.email,
                })
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your uccessfully joined the event.",
                            showConfirmButton: false,
                            timer: 3500,
                        });

                        setIsUserJoinedEvent([...isUserJoinedEvent, {
                            _id: res.data.insertedId,
                            eventId: _id,
                            user_email: user?.email
                        }])
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    return (
        <>
            <Jumbortron
                subtitle="Know more about the event"
                title={eventTitle}
            />
            <section className="event-details-area pt-10 lg:pt-20">
                <Container>
                    <div className="event-details-inner shadow-lg border border-gray-600 dark:border-gray-800 p-5 lg:p-10 rounded-2xl mt-0 2xl:-mt-30 bg-white dark:bg-black relative">
                        <img
                            className="rounded-2xl max-h-[600px] w-full object-cover"
                            src={eventImageUrl}
                            alt=""
                        />
                        <div className="mx-0 xl:mx-[200px]">
                            <div className="flex items-center flex-col md:flex-row gap-4 lg:gap-8 justify-between mt-6">
                                <div className="text-center">
                                    <p className="opacity-70 dark:text-gray-300">Location</p>
                                    <h4 className="text-3xl font-bebas-neue dark:text-white">
                                        {eventLocation}
                                    </h4>
                                </div>
                                <div className="text-center">
                                    <p className="opacity-70 dark:text-gray-300">Event Type</p>
                                    <h4 className="text-3xl font-bebas-neue dark:text-white">
                                        {eventType}
                                    </h4>
                                </div>
                                <div className="text-center">
                                    <p className="opacity-70 dark:text-gray-300">Event Date</p>
                                    <h4 className="text-3xl font-bebas-neue dark:text-white">
                                        {formattedDate}
                                    </h4>
                                </div>
                                <div className="text-center">
                                    <p className="opacity-70 dark:text-gray-300">Event Time</p>
                                    <h4 className="text-3xl font-bebas-neue dark:text-white">
                                        {EventTime(eventStartTime)} -{" "}
                                        {EventTime(eventEndTime)}
                                    </h4>
                                </div>
                            </div>
                            <p className="mt-8 text-center leading-6 dark:text-white">
                                {eventDescription}
                            </p>
                            {user?.email === email ? (
                                <div className="flex items-center gap-1 bg-blue-700 rounded-2xl w-max py-3 px-5 absolute top-16 left-16">
                                    <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                                            />
                                            <path
                                                fill="#fff"
                                                d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            Icon description
                                        </span>
                                    </span>
                                    <h4 className="text-2xl font-bebas-neue text-white">
                                        You created this event
                                    </h4>
                                </div>
                            ) : isUserJoinedEvent.length > 0 ? (
                                <h4 className="text-2xl text-white font-bebas-neue mt-5 mx-auto flex items-center justify-center gap-2 bg-blue-700 rounded-2xl w-max py-3 px-5">
                                    <FaCheckCircle />
                                    Thanks for joining the event!
                                </h4>
                            ) : (
                                <button
                                    onClick={handleJoinEvent}
                                    className="actify-btn-pill mt-6 mx-auto w-max block"
                                >
                                    Join Event
                                </button>
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default EventDetails;
