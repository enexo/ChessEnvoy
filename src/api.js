import axios from 'axios';

let api = axios.create({
    timeout: 10000,
    headers: ({
        'Authorization': 'Bearer 6jscr2xdvsgd1ceakk92g7e7zaixav',
        'Client-ID': 'o9l59asu29au6foaq5zoeo91xz29bo'
    })
});

export default api;
