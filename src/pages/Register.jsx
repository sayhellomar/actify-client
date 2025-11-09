import Container from "../components/Container/Container";
import { Link } from "react-router";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const Register = () => {
    return (
        <section className="register-area py-20 bg-actify-blue/30 mx-10 rounded-2xl">
            <Container>
                <div className="register-inner grid place-items-center">
                    <div className="w-full max-w-[500px] p-4 bg-white rounded-2xl sm:p-6 md:p-12 dark:bg-gray-800">
                        <h5 className="text-3xl font-medium text-center font-bebas-neue text-gray-900 dark:text-white">
                            Sign up to our platform
                        </h5>
                        <p className="text-sm text-center mt-2 mb-6">
                            Sign up to our social development platform to
                            explore some cool events
                        </p>
                        <form className="space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your name here"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your email here"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="photo"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    id="photo"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your photo URL here"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password here"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full actify-btn-pill"
                            >
                                Register
                            </button>
                            <div>
                                <p className="text-sm text-center font-medium">- Or sign up with -</p>
                                <div className="flex items-center gap-2 mt-4">
                                    <button className="w-full border border-gray-300 font-medium rounded-lg text-sm px-7 py-3 flex items-center gap-2 justify-center cursor-pointer">
                                        <FaGoogle />
                                        Google
                                    </button>
                                    <button className="w-full border border-gray-300 font-medium rounded-lg text-sm px-7 py-3 flex items-center gap-2 justify-center cursor-pointer">
                                        <FaGithub />
                                        GitHub
                                    </button>
                                </div>
                            </div>
                            <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-black hover:underline"
                                >
                                    Login
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Register;
