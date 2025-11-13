import axios from "axios";

const instance = axios.create({
    baseURL: 'https://actify-server-opal.vercel.app'
})

const useAxios = () => {
    return instance;
};

export default useAxios;