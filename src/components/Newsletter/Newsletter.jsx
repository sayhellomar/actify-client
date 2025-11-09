import Container from "../Container/Container";

const Newsletter = () => {
    return (
        <section className="newsletter-area">
            <Container>
                <div className="newsletter-inner bg-actify-blue/30 rounded-2xl p-20 flex gap-8 justify-between">
                    <div className="flex-1">
                        <p className="opacity-70 mb-2">Newsletter</p>
                        <h4 className="text-5xl font-bebas-neue">
                            Subscribe to <br />our newsletter
                        </h4>
                        <p className="mt-4">We respect your privacy. We'll not share your email and no SPAM.</p>
                    </div>
                    <form class="w-full flex-1">
                        <div class="mb-5">
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                                placeholder="Enter your email here"
                                required
                            />
                        </div>

                        <div class="flex items-start mb-5">
                            <div class="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    value=""
                                    class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label
                                for="terms"
                                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                I agree with the{" "}
                                <a
                                    href="#"
                                    class="text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    terms and conditions
                                </a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            class="actify-btn-pill"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Newsletter;
