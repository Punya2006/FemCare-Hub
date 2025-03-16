const axios = require('axios');

// o-auth
const authToken = 'YOUR_AUTH_TOKEN';

// periods data 
axios.get('https://eggtimer.herokuapp.com/api/v2/periods/', {
    headers: {
        'Authorization': `Token ${authToken}`,
        'Content-Type': 'application/json'
    }
})
.then(response => console.log(response.data))
.catch(error => console.error('Error:', error));

// new period entry to store it calender 
axios.post('https://eggtimer.herokuapp.com/api/v2/periods/', {
    timestamp: '2025-03-16T00:00:00'
}, {
    headers: {
        'Authorization': `Token ${authToken}`,
        'Content-Type': 'application/json'
    }
})
.then(response => console.log(response.data))
.catch(error => console.error('Error:', error));
