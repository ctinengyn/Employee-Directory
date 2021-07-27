import axios from "axios";

// To use in another file
export default {
    getUser: function() {
        // Generate 50 female users
        return axios.get("https://randomuser.me/api/?gender=female&results=50")
    },
};