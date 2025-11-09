import Jumbortron from "../components/Jumbortron/Jumbortron";
import Container from "../components/Container/Container";
import EventCard from "../components/EventCard/EventCard";

const UpcomingEvents = () => {
    return (
        <>
            <Jumbortron subtitle="You're invited to join" title="Upcoming Events" description="Explore upcoming events that bring people together for a cleaner, greener, and better society." />
            <section className="upcoming-events-area pt-20">
                <Container>
                    <div className="upcoming-events grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </Container>
            </section>
        </>
    );
};

export default UpcomingEvents;
