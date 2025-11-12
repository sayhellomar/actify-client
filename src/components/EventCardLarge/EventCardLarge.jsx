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
        <div className="flex flex-col lg:flex-row items-start lg:items-center border border-gray-200 dark:border-gray-800 justify-between gap-3 lg:gap-5 rounded-2xl p-6 lg:p-8">
            <div className="date text-left lg:text-center flex-auto lg:flex-1">
                <p className="uppercase text-sm dark:text-gray-300">{month}</p>
                <h3 className="text-5xl font-bold dark:text-white">{date}</h3>
            </div>
            <div className="flex-auto lg:flex-2">
                <img
                    className="w-[120px] h-[120px] xl:w-[180px] xl:h-[180px] rounded-full object-cover"
                    src={eventImageUrl}
                    alt={eventTitle}
                />
            </div>
            <div className="flex-auto lg:flex-6">
                <div className="flex items-center gap-2 border border-blue-700 text-blue-700 dark:text-blue-400 dark:border-blue-500 uppercase text-sm font-semibold py-2 px-5 rounded-full w-max">
                    <FaMapLocationDot />
                    {eventLocation}
                </div>
                <h4 className="text-3xl font-bebas-neue mt-3 mb-3 dark:text-white">
                    {eventTitle}
                </h4>
                <p className="opacity-80 dark:text-gray-300">{eventDescription}</p>
            </div>
            <div className="flex-auto lg:flex-2 text-center block mt-4 lg:mt-0 mb-2 lg:mb-0">
                {children}
            </div>
        </div>
    );
};

export default EventCardLarge;
