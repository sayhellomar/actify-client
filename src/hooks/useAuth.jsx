import { use } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
    const authValue = use(AuthContext);
    return authValue;
};

export default useAuth;