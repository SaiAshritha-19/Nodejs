const http = require('https');

// Sample URL to query
const url = 'https://dummy.restapiexample.com/api/v1/employees';

// Make a GET request to the URL
http.get(url, (response) => {
  let data = '';

  // A chunk of data has been received
  response.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received
  response.on('end', () => {
    // Parse the received JSON data
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  });
}).on('error', (error) => {
  console.error(`Error fetching data: ${error.message}`);
});
