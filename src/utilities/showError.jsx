import Swal from "sweetalert2";

const showError = (error) => {
    switch (error) {
        case "auth/email-already-in-use":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Email already exists. Please try to login",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/invalid-email":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "The email address is invalid. Please check and try again.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/weak-password":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "The password is too weak. Please choose a stronger password.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/operation-not-allowed":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "This authentication method is not enabled. Please contact support.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/user-not-found":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "No user found with this email. Please register first.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/wrong-password":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Wrong password. Please check your password and try again.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/user-disabled":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "This user account has been disabled. Please contact support.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/invalid-credential":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Invalid credential. Please try again.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/account-exists-with-different-credential":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "An account already exists with the same email but different sign-in method. Please use the original method.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/invalid-verification-code":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "The verification code is invalid. Please request a new one.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/invalid-verification-id":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "The verification ID is invalid. Please request again.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        case "auth/unauthorized-domain":
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "This domain is not authorized to use this application. Please check your project settings.",
                showConfirmButton: false,
                timer: 3500,
            });
            break;
        default:
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "An unexpected error occurred.",
                showConfirmButton: false,
                timer: 3500,
            });
    }
};

export default showError;