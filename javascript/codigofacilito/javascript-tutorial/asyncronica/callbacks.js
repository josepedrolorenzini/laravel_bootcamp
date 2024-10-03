let request = require("request");
//https://www.npmjs.com/package/request

request("http://www.google.com" , (error,response,body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  
})