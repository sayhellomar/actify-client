import Container from "../components/Container/Container";
import Jumbortron from "../components/Jumbortron/Jumbortron";
import EventCardLarge from "../components/EventCardLarge/EventCardLarge";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";

const JoinedEvent = () => {
    const [joinedEvent, setJoinedEvent] = useState([]);
    const { user, loading } = useAuth();
    const axios = useAxios();

    useEffect(() => {
        axios
            .get(`/joined-event?email=${user?.email}`)
            .then((res) => {
                setJoinedEvent(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [axios, user]);

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <Jumbortron
                subtitle="The event you wanted to join"
                title="Joined Events"
                description="View all the events you've joined and get ready to make a difference together."
            />
            <section className="joined-event-area pt-20">
                <Container>
                    <div className="join-event flex flex-col gap-8">

                        {joinedEvent.length ? (
                            joinedEvent.map((singleJoinedEvent) => (
                                <EventCardLarge key={singleJoinedEvent._id}
                                        event={singleJoinedEvent.event}>
                                    <Link
                                        to={`/event-detail/${singleJoinedEvent.event._id}`}
                                        className="actify-btn-pill"
                                    >
                                        View Details
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
                                        to="/upcoming-events"
                                    >
                                        Browse Event
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

export default JoinedEvent;
