import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://us-central1-clone-zl-46309.cloudfunctions.net/api'
    // Local Host link
    // 'http://localhost:5001/clone-zl-46309/us-central1/api' 
    
});

export default instance;