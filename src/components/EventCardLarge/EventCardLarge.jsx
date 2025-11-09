import { FaMapLocationDot } from "react-icons/fa6";

const EventCardLarge = () => {
    return (
        <div className="flex items-center border border-gray-200 justify-between gap-5 rounded-2xl p-8">
            <div className="date text-center flex-1">
                <p className="uppercase text-sm">Wed</p>
                <h3 className="text-5xl font-bold">24</h3>
            </div>
            <div className="flex-2">
                <img
                    className="w-[180px] h-[180px] rounded-full object-cover"
                    src="../src/assets/event-1.jpg"
                    alt=""
                />
            </div>
            <div className="flex-6">
                <div className="flex items-center gap-2 border border-blue-700 text-blue-700 uppercase text-sm font-semibold py-2 px-5 rounded-full w-max">
                    <FaMapLocationDot />
                    Cox's Bazar
                </div>
                <h4 className="text-3xl font-bebas-neue mt-3 mb-3">
                    Beach Cleanup at Cox's Bazar Seashore
                </h4>
                <p className="opacity-80">
                    Let’s keep the world’s longest sea beach clean! Join our
                    volunteer team to collect plastic waste, raise awareness
                    about ocean pollution, and protect marine life for a
                    cleaner, greener future.
                </p>
            </div>
            <div className="flex-2 text-center">
                <button className="actify-btn-pill">View Details</button>
            </div>
        </div>
    );
};

export default EventCardLarge;
