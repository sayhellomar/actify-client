import { Link } from "react-router";
import Container from "../Container/Container";
import { FaCirclePlay } from "react-icons/fa6";
import bannerImage from '../../assets/banner.png'
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="banner-area py-10 lg:py-20 bg-actify-blue/30 dark:bg-actify-blue mx-5 lg:mx-10 rounded-2xl">
            <Container>
                <div className="banner-inner grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    <motion.div className="banner-left" initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: 'easeOut', delay: .1}}>
                        <p className="opacity-70">You're invited to join</p>
                        <h2 className="font-bebas-neue text-6xl lg:text-8xl mt-2 mb-5">Beach Cleanup at Cox's Bazar Seashore</h2>
                        <p className="opacity-85 mb-9">Let's keep the world's longest sea beach clean! Join our volunteer team to collect plastic waste, raise awareness about ocean pollution, and protect marine life for a cleaner, greener future.</p>
                        <div className="flex items-center gap-6">
                            <Link className="actify-btn-pill" to="/event-detail/691226fb606878d76fa2f75b">Join Event</Link>
                            <a href="https://www.youtube.com/watch?v=_-AS5DtDeqs" target="_blank" className="flex items-center gap-2 font-medium"><FaCirclePlay /> Watch Video</a>
                        </div>
                    </motion.div>
                    <motion.div className="banner-right justify-self-center lg:justify-self-end" initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1, ease: 'easeOut', delay: .1}}>
                        <img src={bannerImage} alt="Banner" />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;