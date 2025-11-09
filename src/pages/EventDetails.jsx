import Container from "../components/Container/Container";
import Jumbortron from "../components/Jumbortron/Jumbortron";

const EventDetails = () => {
    return (
        <>
            <Jumbortron
                subtitle="Know more about the event"
                title="Event Details"
            />
            <section className="event-details-area pt-20">
                <Container>
                    <div className="event-details-inner shadow-lg border border-gray-600 p-10 rounded-2xl -mt-30 bg-white">
                        <img
                            className="rounded-2xl max-h-[600px] w-full object-cover"
                            src="../src/assets/event-1.jpg"
                            alt=""
                        />
                        <div className="mx-[200px]">
                            <div className="flex items-center gap-8 justify-between mt-6">
                                <div className="text-center">
                                    <p className="opacity-70">Location</p>
                                    <h4 className="text-3xl font-bebas-neue">
                                        Cox's Bazar
                                    </h4>
                                </div>
                                <div className="text-center">
                                    <p className="opacity-70">Event Type</p>
                                    <h4 className="text-3xl font-bebas-neue">
                                        Cleanup
                                    </h4>
                                </div>
                                <div className="text-center">
                                    <p className="opacity-70">Event Date</p>
                                    <h4 className="text-3xl font-bebas-neue">
                                        11/09/2025
                                    </h4>
                                </div>
                            </div>
                            <p className="mt-8 text-center leading-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Architecto aut dolores fugiat
                                facilis eum? Eum perferendis alias sapiente
                                eveniet cupiditate? Cum quaerat facere
                                consequatur aspernatur exercitationem,
                                asperiores, ducimus velit officia eaque quam
                                quasi praesentium porro ipsum eos veniam
                                quisquam recusandae necessitatibus minima enim?
                                Id incidunt debitis dignissimos repudiandae nemo
                                ea?
                            </p>
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
