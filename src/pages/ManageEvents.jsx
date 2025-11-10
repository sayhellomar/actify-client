import Container from "../components/Container/Container";
import Jumbortron from "../components/Jumbortron/Jumbortron";
import EventCardLarge from "../components/EventCardLarge/EventCardLarge";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";

const ManageEvents = () => {
    const {loading} = useAuth();

    if(loading) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }
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
                        <EventCardLarge>
                            <Link to={`/edit-event/1`} className="actify-btn-pill">
                                Edit Event
                            </Link>
                        </EventCardLarge>
                        <EventCardLarge>
                            <Link className="actify-btn-pill">
                                Edit Event
                            </Link>
                        </EventCardLarge>
                        <EventCardLarge>
                            <Link className="actify-btn-pill">
                                Edit Event
                            </Link>
                        </EventCardLarge>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default ManageEvents;
