import Jumbortron from "../components/Jumbortron/Jumbortron";
import Container from "../components/Container/Container";
import EventCard from "../components/EventCard/EventCard";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import { Link } from "react-router";

const UpcomingEvents = () => {
    const axios = useAxios();
    const [upcomingEvents, setUpcomingEvents] = useState();
    const [eventTitle, setEventTitle] = useState("");
    const [eventType, setEventType] = useState("");

    useEffect(() => {
        axios.get("/upcoming-events").then((res) => {
            setUpcomingEvents(res.data);
        });
    }, [axios]);

    const handleSearch = (e) => {
        if (e.target.nodeName === "INPUT") {
            setEventTitle(e.target.value);
        }
        if (e.target.nodeName === "SELECT") {
            setEventType(e.target.value);
        }
    };

    useEffect(() => {
        axios
            .get(`/search?eventTitle=${eventTitle}&eventType=${eventType}`)
            .then((res) => {
                setUpcomingEvents(res.data);
            });
    }, [axios, eventTitle, eventType]);

    if (!upcomingEvents) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    console.log(upcomingEvents.length);
    return (
        <>
            <Jumbortron
                subtitle="You're invited to join"
                title="Upcoming Events"
                description="Explore upcoming events that bring people together for a cleaner, greener, and better society."
            />
            <SearchFilter handleSearch={handleSearch} eventType={eventType} />
            <section className="upcoming-events-area pt-20">
                <Container>
                    <div className="upcoming-events grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {upcomingEvents.length !== 0 ? (
                            upcomingEvents.map((upcomingEvent) => (
                                <EventCard
                                    key={upcomingEvent._id}
                                    event={upcomingEvent}
                                />
                            ))
                        ) : (
                            <div className="text-center col-span-12">
                                <div>
                                    <h3 className="text-5xl font-bold font-bebas-neue mb-8 dark:text-white">
                                        No Events Found!
                                    </h3>
                                    <Link
                                        className="actify-btn-pill"
                                        to="/"
                                    >
                                        Go Back to Homepage
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default UpcomingEvents;
