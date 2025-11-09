const Jumbortron = ({subtitle = "", title = "", description = ""}) => {
    return (
        <section className="jumbortron-area py-20 bg-actify-blue/30 mx-10 rounded-2xl">
            <div className="max-w-[800px] px-5 mx-auto">
                <div className="jumbortron-inner text-center">
                    <p className="opacity-70">{subtitle}</p>
                    <h2 className="font-bebas-neue text-8xl mt-2 mb-5">{title}</h2>
                    <p className="opacity-90">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default Jumbortron;