import { useLoaderData } from "react-router";
import Container from "../components/Container/Container";
import Jumbortron from "../components/Jumbortron/Jumbortron";
import EventTime from "../utilities/EventTime";

const EventDetails = () => {
    const event = useLoaderData();
    const {
        eventTitle,
        eventDescription,
        eventType,
        eventImageUrl,
        eventLocation,
        eventDate,
        eventStartTime,
        eventEndTime,
    } = event;

    const formattedDate = eventDate.split('T')[0];
    return (
        <>
            <Jumbortron
                subtitle="Know more about the event"
                title={eventTitle}
            />
            <section className="event-details-area pt-20">
                <Container>
                    <div className="event-details-inner shadow-lg border border-gray-600 p-10 rounded-2xl -mt-30 bg-white">
                        <img
                            className="rounded-2xl max-h-[600px] w-full object-cover"
                            src={eventImageUrl}
                            alt=""
                        />
                        <div className="mx-[200px]">
                            <div className="flex items-center gap-8 justify-between mt-6">
                                <div className="text-center">
                                    <p className="opacity-70">Location</p>
                                    <h4 className="text-3xl font-bebas-neue">
                                        {eventLocation}
                                    </h4>
                                </div>
                                <div className="text-center">
                                    <p className="opacity-70">Event Type</p>
                                    <h4 className="text-3xl font-bebas-neue">
                                        {eventType}
                                    </h4>
                                </div>
                                <div className="text-center">
                                    <p className="opacity-70">Event Date</p>
                                    <h4 className="text-3xl font-bebas-neue">
                                        {formattedDate}
                                    </h4>
                                </div>
                                <div className="text-center">
                                    <p className="opacity-70">Event Time</p>
                                    <h4 className="text-3xl font-bebas-neue">
                                        {EventTime(eventStartTime)}
                                        {" "} - {" "}
                                        {EventTime(eventEndTime)}
                                    </h4>
                                </div>
                            </div>
                            <p className="mt-8 text-center leading-6">{eventDescription}</p>
                            <button className="actify-btn-pill mt-6 mx-auto w-max block">
                                Join Event
                            </button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default EventDetails;
