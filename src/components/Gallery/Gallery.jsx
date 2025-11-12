import Container from "../Container/Container";
import eventImgOne from '../../assets/event-1.jpg';
import eventImgTwo from '../../assets/event-2.jpg';
import eventImgThree from '../../assets/event-3.jpg';
import eventImgFour from '../../assets/event-4.jpg';
import eventImgFive from '../../assets/event-5.jpg';

const Gallery = () => {
    return (
        <section className="gallery-area py-10 lg:py-20">
            <Container>
                <div className="gallery-inner">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div>
                            <p className="opacity-70 mb-2 dark:text-gray-300">Event Gallery</p>
                            <h4 className="text-5xl font-bebas-neue dark:text-white">
                                Explore our events
                            </h4>
                        </div>
                        <div>
                            <p className="dark:text-gray-300">Check out our event gallery. You're going to love it!</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-8 mt-8">
                        <div className="overflow-hidden max-h-auto lg:max-h-[200px]">
                            <img className="rounded-2xl w-full h-full object-cover" src={eventImgOne} alt="" />
                        </div>
                        <div className="row-auto lg:row-span-2 overflow-hidden">
                            <img className="rounded-2xl w-full h-full object-cover" src={eventImgTwo} alt="" />
                        </div>
                        <div className="row-auto lg:row-span-3 overflow-hidden">
                            <img className="rounded-2xl w-full h-full object-cover" src={eventImgFour} alt="" />
                        </div>
                        <div className="row-span-2 overflow-hidden">
                            <img className="rounded-2xl w-full h-full object-cover" src={eventImgThree} alt="" />
                        </div>
                        <div className="max-h-auto lg:max-h-[200px] overflow-hidden">
                            <img className="rounded-2xl w-full h-full object-cover" src={eventImgFive} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Gallery;
