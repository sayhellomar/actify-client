import { Link } from "react-router";
import Container from "../Container/Container";
import { FaCirclePlay } from "react-icons/fa6";
import bannerImage from '../../assets/banner.png'

const Banner = () => {
    return (
        <section className="banner-area py-20 bg-actify-blue/30 mx-10 rounded-2xl">
            <Container>
                <div className="banner-inner grid grid-cols-2 items-center gap-10">
                    <div className="banner-left">
                        <p className="opacity-70">You're invited to join</p>
                        <h2 className="font-bebas-neue text-8xl mt-2 mb-5">Beach Cleanup at Cox's Bazar Seashore</h2>
                        <p className="opacity-85 mb-9">Let's keep the world's longest sea beach clean! Join our volunteer team to collect plastic waste, raise awareness about ocean pollution, and protect marine life for a cleaner, greener future.</p>
                        <div className="flex items-center gap-6">
                            <button className="actify-btn-pill" to="/register">Join Event</button>
                            <Link className="flex items-center gap-2 font-medium"><FaCirclePlay /> Watch Video</Link>
                        </div>
                    </div>
                    <div className="banner-right justify-self-end">
                        <img src={bannerImage} alt="Banner" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;