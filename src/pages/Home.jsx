import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import Gallery from '../components/Gallery/Gallery';
import Newsletter from '../components/Newsletter/Newsletter';

const Home = () => {
    return (
        <>
            <Banner />
            <main>
                <Features />
                <Gallery />
                <Newsletter />
            </main>
        </>
    );
};

export default Home;