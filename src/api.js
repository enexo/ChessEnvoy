import axios from 'axios';

let api = axios.create({
    timeout: 10000,
    headers: ({
        'Authorization': 'Bearer qjutzqmo0amynhp2uxz9r4g7g7aabh',
        'Client-ID': 'o9l59asu29au6foaq5zoeo91xz29bo'
    })
});

export default api;
