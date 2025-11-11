import Jumbortron from "../components/Jumbortron/Jumbortron";
import Container from "../components/Container/Container";
import EventCard from "../components/EventCard/EventCard";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import SearchFilter from "../components/SearchFilter/SearchFilter";

const UpcomingEvents = () => {
    const axios = useAxios();
    const [upcomingEvents, setUpcomingEvents] = useState();

    useEffect(()=>{
        axios.get('/upcoming-events')
        .then(res => {
            setUpcomingEvents(res.data);
        });
    }, [axios]);

    const handleSearch = e => {
        console.log(e.target.value);
        axios.get(`/search?eventTitle=${e.target.value}`)
        .then(res => {
            setUpcomingEvents(res.data);
        })
    };

    if(!upcomingEvents) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }
    return (
        <>
            <Jumbortron subtitle="You're invited to join" title="Upcoming Events" description="Explore upcoming events that bring people together for a cleaner, greener, and better society." />
            <SearchFilter handleSearch={handleSearch} />
            <section className="upcoming-events-area pt-20">
                <Container>
                    <div className="upcoming-events grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            upcomingEvents.map(upcomingEvent => <EventCard key={upcomingEvent._id} event={upcomingEvent} />)
                        }
                    </div>
                </Container>
            </section>
        </>
    );
};

export default UpcomingEvents;
