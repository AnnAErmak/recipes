import axios from "axios";
import { BASE_HEADER, BASE_URL} from "config/api";

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.get = BASE_HEADER




