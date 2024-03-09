import axios from "axios";

let apiUrll;

const apiUrls = {
    production: "www.event-crud-api.heroku.com/api",
    development: "http://localhost:4000/api"
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}
const api = axios.creat ({
    baseURL: apiUrl,
})
