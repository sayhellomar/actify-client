import { BsCalendar4Event } from "react-icons/bs";
import Container from "../Container/Container";
import { MdOutlineCreateNewFolder, MdOutlineUpcoming } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";

const Features = () => {
    return (
        <section className="features-area py-10 lg:py-20">
            <Container>
                <div className="features-inner grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 lg:gap-8">
                    <div className="p-8 bg-actify-red rounded-2xl min-h-[300px] flex flex-col justify-between">
                        <BsCalendar4Event color="#FFF" size="2.5em" />
                        <div>
                            <a href="#">
                                <h5 className="mb-1 text-3xl font-semibold text-white font-bebas-neue tracking-wide">
                                    Join Events
                                </h5>
                            </a>
                            <p className="font-normal text-white">
                                Easily join our events
                            </p>
                        </div>
                    </div>
                    <div className="p-8 bg-actify-blue rounded-2xl min-h-[300px] mt-0 md:mt-8 flex flex-col justify-between">
                        <IoCreateOutline size="3em" />
                        <div>
                            <a href="#">
                                <h5 className="mb-1 text-3xl font-semibold font-bebas-neue tracking-wide">
                                    Create Events
                                </h5>
                            </a>
                            <p className="font-normal">
                                Easily create an event
                            </p>
                        </div>
                    </div>
                    <div className="p-8 bg-actify-yellow rounded-2xl min-h-[300px] mt-0 xl:mt-8 flex flex-col justify-between">
                        <TbListDetails size="3em" />
                        <div>
                            <a href="#">
                                <h5 className="mb-1 text-3xl font-semibold font-bebas-neue tracking-wide">
                                    Event Details
                                </h5>
                            </a>
                            <p className="font-normal">
                                Explore information
                            </p>
                        </div>
                    </div>
                    <div className="p-8 bg-actify-violet rounded-2xl min-h-[300px] mt-0 md:mt-8 flex flex-col justify-between col-auto xl:col-span-2">
                        <MdOutlineUpcoming size="3em" />
                        <div>
                            <a href="#">
                                <h5 className="mb-1 text-3xl font-semibold font-bebas-neue tracking-wide">
                                    Upcoming Events
                                </h5>
                            </a>
                            <p className="font-normal">
                                Browse all the events which is knocking at your door!
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Features;
