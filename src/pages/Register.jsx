import Container from "../components/Container/Container";
import { Link, useNavigate } from "react-router";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import showError from "../utilities/showError";

const Register = () => {
    const {
        user,
        loading,
        setLoading,
        createUser,
        udpateUserProfile,
        googleSignIn,
    } = useAuth();
    const [passError, setPassError] = useState(null);
    const navigate = useNavigate();
    const axios = useAxios();

    useEffect(() => {
        if (user) {
            navigate(location.state || '/');
        }
    }, [user])

    if (loading || user) {
        return (
            <div className="min-h-[calc(100vh-96px-353px)] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    // console.log(user);
    const handleRegister = (e) => {
        setPassError(null);
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setPassError(
                "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long."
            );
            return;
        }
        createUser(email, password)
            .then((userCredential) => {
                axios
                    .post("/users", {
                        name,
                        email,
                        photo,
                    })
                    .then((res) => {
                        if (res.data.insertedId) {
                            udpateUserProfile({
                                displayName: name,
                                photoURL: photo,
                            }).then(() => {
                                navigate("/");
                            });
                            form.reset();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account has been created successfully.",
                                showConfirmButton: false,
                                timer: 3500,
                            });
                        }
                    })
                    .catch((error) => {
                        showError(error.code);
                    });
                const user = userCredential.user;
            })
            .catch((error) => {
                setLoading(false);
                showError(error.code);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                axios
                    .post("/users", {
                        name: user.displayName,
                        email: user.email,
                        photo: user.photoURL,
                    })
                    .then((res) => {
                        if (res.data.insertedId) {
                            navigate("/");
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your account has been created successfully.",
                                showConfirmButton: false,
                                timer: 3500,
                            });
                        }
                    })
                    .catch((error) => {
                        showError(error.code);
                    });
            })
            .catch((error) => {
                setLoading(false);
                showError(error.code);
            });
    };

    return (
        <section className="register-area py-10 lg:py-20 bg-actify-blue/30 dark:bg-actify-blue/10 mx-5 2xl:mx-10 rounded-2xl">
            <Container>
                <div className="register-inner grid place-items-center">
                    <div className="w-full max-w-[500px] relative p-8 bg-white rounded-2xl md:p-12 dark:bg-gray-900">
                        <h5 className="text-3xl font-medium text-center font-bebas-neue text-gray-900 dark:text-white">
                            Sign up to our platform
                        </h5>
                        <p className="text-sm text-center mt-2 mb-6 dark:text-gray-300">
                            Sign up to our social development platform to
                            explore some cool events
                        </p>
                        <form className="space-y-6" onSubmit={handleRegister}>
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
                                <p className="text-sm text-center font-medium dark:text-gray-300">
                                    - Or sign up with -
                                </p>
                                <div className="flex items-center gap-2 mt-4">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        type="button"
                                        className="w-full border border-gray-300 dark:border-gray-800 dark:text-gray-300 font-medium rounded-lg text-sm px-7 py-3 flex items-center gap-2 justify-center cursor-pointer"
                                    >
                                        <FaGoogle />
                                        Google
                                    </button>
                                    {/* <button className="w-full border border-gray-300 font-medium rounded-lg text-sm px-7 py-3 flex items-center gap-2 justify-center cursor-pointer">
                                        <FaGithub />
                                        GitHub
                                    </button> */}
                                </div>
                            </div>
                            <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-black dark:text-white hover:underline"
                                >
                                    Login
                                </Link>
                            </div>
                            {passError && (
                                <p className="text-red-600 text-sm absolute bottom-5 left-0 right-0 text-center px-6">
                                    {passError}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Register;
