import { FaCalendarAlt } from "react-icons/fa";
import "./EventCard.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const EventCard = () => {
    return (
        <div
            className="event-card min-h-[600px] rounded-2xl p-8 flex flex-col justify-between"
            style={{ backgroundImage: "url('../src/assets/event-1.jpg')" }}
        >
            <div className="flex items-center gap-2 bg-blue-700 text-white uppercase text-sm font-semibold py-2 px-5 rounded-full w-max">
                <FaMapLocationDot />
                Cox's Bazar
            </div>
            <div className="relative z-1">
                <h4 className="text-3xl font-bebas-neue text-white">
                    Beach Cleanup at Cox's Bazar Seashore
                </h4>
                <div className="flex justify-between items-center mt-2">
                    <p className="bg-actify-violet py-2 px-5 rounded-full text-sm">Cleanup</p>
                    <p className="text-white flex items-center gap-1.5">
                        <FaCalendarAlt size="1.2em" />
                        <span className="text-sm">11/09/2025</span>
                    </p>
                </div>
            </div>
            <div className="event-card-details absolute bg-black/60 w-full h-full left-0 top-0 rounded-2xl flex items-center justify-center z-2">
                <Link to="/event-detail/1" className="actify-btn-pill">View Event</Link>
            </div>
        </div>
    );
};

export default EventCard;
