import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";

import { ENV } from "../config/config.js";

class ApiClient {

    static instance;

    constructor(){
        if(ApiClient.instance) return ApiClient.instance;
        ApiClient.instance = this;
    }

    async send(payload){
        try{
            const res = await axios.post(ENV.apiUrl, payload);
            return res.statusText;
        }catch(e){
            console.error("API ERROR", e.message);
            throw e;
        }
    }
}

export default new ApiClient();

