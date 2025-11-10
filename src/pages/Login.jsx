import Container from "../components/Container/Container";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";

const Login = () => {
    const { user, loading, setLoading, signIn, googleSignIn } = useAuth();
    const navigate = useNavigate();

    if (user) {
        navigate("/");
    }

    if (loading || user) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((userCredential) => {
                form.reset();
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                navigate("/");
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    return (
        <section className="login-area py-20 bg-actify-blue/30 mx-10 rounded-2xl">
            <Container>
                <div className="login-inner min-h-[calc(100vh-92px-160px-353px)] grid place-items-center">
                    <div className="w-full max-w-[450px] p-4 bg-white rounded-2xl sm:p-6 md:p-12 dark:bg-gray-800">
                        <h5 className="text-3xl font-medium text-center font-bebas-neue text-gray-900 dark:text-white">
                            Sign in to our platform
                        </h5>
                        <p className="text-sm text-center mt-2 mb-6">
                            Sign in to our social development platform to
                            explore some cool events
                        </p>
                        <form className="space-y-6" onSubmit={handleSignIn}>
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
                                Login
                            </button>
                            <div>
                                <p className="text-sm text-center font-medium">
                                    - Or sign in with -
                                </p>
                                <div className="flex items-center gap-2 mt-4">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="button"
                                        className="w-full border border-gray-300 font-medium rounded-lg text-sm px-7 py-3 flex items-center gap-2 justify-center cursor-pointer"
                                    >
                                        <FaGoogle />
                                        Google
                                    </button>
                                    {/* <button className="w-full border border-gray-300 font-medium rounded-lg text-sm px-7 py-3 flex items-center gap-2 justify-center">
                                        <FaGithub />
                                        GitHub
                                    </button> */}
                                </div>
                            </div>
                            <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="text-black hover:underline"
                                >
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Login;
