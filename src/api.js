import axios from 'axios';

let api = axios.create({
    timeout: 10000,
    headers: ({
        'Authorization': 'Bearer kf32t6dhhh2p1ubly9e8bkzqb3lfvc',
        'Client-ID': 'o9l59asu29au6foaq5zoeo91xz29bo'
    })
});

export default api;
