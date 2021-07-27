import axios from "axios";

// To use in another file
export default {
    getUser: function() {
        // Generate 50 users in US
        return axios.get("https://randomuser.me/api/?results=50&nat=us")
    },
};