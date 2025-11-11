import Container from "../components/Container/Container";
import Jumbortron from "../components/Jumbortron/Jumbortron";
import EventCardLarge from "../components/EventCardLarge/EventCardLarge";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const { user, loading } = useAuth();
    const axios = useAxios();

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    useEffect(() => {
        axios
            .get(`/events?email=${user.email}`)
            .then((res) => {
                setEvents(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [axios, user]);

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
                        {events.map((event) => (
                            <EventCardLarge key={event._id} event={event}>
                                <Link
                                    to={`/edit-event/${event._id}`}
                                    className="actify-btn-pill"
                                >
                                    Edit Event
                                </Link>
                            </EventCardLarge>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ManageEvents;
