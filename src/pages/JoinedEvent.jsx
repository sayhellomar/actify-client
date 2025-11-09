import Container from "../components/Container/Container";
import Jumbortron from "../components/Jumbortron/Jumbortron";
import EventCardLarge from "../components/EventCardLarge/EventCardLarge";
import { Link } from "react-router";

const JoinedEvent = () => {
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
                        <EventCardLarge><Link to={`/event-detail/1`} className="actify-btn-pill">View Details</Link></EventCardLarge>
                        <EventCardLarge><Link to={`/event-detail/1`} className="actify-btn-pill">View Details</Link></EventCardLarge>
                        <EventCardLarge><Link to={`/event-detail/1`} className="actify-btn-pill">View Details</Link></EventCardLarge>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default JoinedEvent;
