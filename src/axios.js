import axios from "axios";

const instance = axios.create({
    baseURL: "..." // THE API url
});



export default instance;