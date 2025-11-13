import Container from "../components/Container/Container";
import Jumbortron from "../components/Jumbortron/Jumbortron";
import EventCardLarge from "../components/EventCardLarge/EventCardLarge";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    useEffect(() => {
        axiosSecure
            .get(`/events?email=${user.email}`)
            .then((res) => {
                setEvents(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [axiosSecure, user]);

    return (
        <>
            <Jumbortron
                subtitle="The event you already created"
                title="Manage Events"
                description="View all the events you've created and get ready to make a difference together."
            />
            <section className="joined-event-area pt-20">
                <Container>
                    <div className="join-event flex flex-col gap-8">
                        {events.length ? (
                            events.map((event) => (
                                <EventCardLarge key={event._id} event={event}>
                                    <Link
                                        to={`/edit-event/${event._id}`}
                                        className="actify-btn-pill"
                                    >
                                        Edit Event
                                    </Link>
                                </EventCardLarge>
                            ))
                        ) : (
                            <div className="text-center min-h-[calc(100vh-104px-332px-80px-353px)] pb-20 grid items-center">
                                <div>
                                    <h3 className="text-5xl font-bold font-bebas-neue mb-8 dark:text-white">
                                        No Events Found!
                                    </h3>
                                    <Link
                                        className="actify-btn-pill"
                                        to="/create-event"
                                    >
                                        Create Event
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

export default ManageEvents;
