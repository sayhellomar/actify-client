import { FaMapLocationDot } from "react-icons/fa6";

const EventCardLarge = ({event, children}) => {
    const {
        _id,
        eventTitle,
        eventDescription,
        eventType,
        eventImageUrl,
        eventLocation,
        eventDate,
    } = event;

    const month = new Date(eventDate).toLocaleString('en-US', {month: 'long'});
    const date = new Date(eventDate).getDate();


    return (
        <div className="flex items-center border border-gray-200 justify-between gap-5 rounded-2xl p-8">
            <div className="date text-center flex-1">
                <p className="uppercase text-sm">{month}</p>
                <h3 className="text-5xl font-bold">{date}</h3>
            </div>
            <div className="flex-2">
                <img
                    className="w-[180px] h-[180px] rounded-full object-cover"
                    src={eventImageUrl}
                    alt={eventTitle}
                />
            </div>
            <div className="flex-6">
                <div className="flex items-center gap-2 border border-blue-700 text-blue-700 uppercase text-sm font-semibold py-2 px-5 rounded-full w-max">
                    <FaMapLocationDot />
                    {eventLocation}
                </div>
                <h4 className="text-3xl font-bebas-neue mt-3 mb-3">
                    {eventTitle}
                </h4>
                <p className="opacity-80">{eventDescription}</p>
            </div>
            <div className="flex-2 text-center">
                {children}
            </div>
        </div>
    );
};

export default EventCardLarge;
