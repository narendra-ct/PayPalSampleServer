var request = require('request');
var sanboxUrl = 'https://api.sandbox.paypal.com';
var clientId = "AUVnZovCUnl6le-ZyfaC8L-tdpmY0u1vQ-AoHk4VFk4URgO5kh2V8RaiLhbv0APzjIef5_t7aaQDARv_"; //india-business
var secret = "ENrjanxj1uDByuQ2UFn0jEF5L7fMJ771W4UxCJYUyTOITkgCEDODTSJnnINtfiR4vmrWY69Jelv2NTTn";
var basicAuth = new Buffer(clientId+":"+secret).toString('base64') ;

var initialize = function(){  
    var options = {
        uri: sanboxUrl + '/v1/oauth2/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic '+basicAuth
        },
        body: "grant_type=client_credentials&response_type=token&return_authn_schemes=true"
            
    }; 
    return new Promise(function(resolve, reject) { 
        request(options, function (err, response) {
            if (err) {
                console.error(err);
                reject(err);
            }
            var access_token = JSON.parse(response.body).access_token; 
            console.log(access_token);
            resolve(access_token);
        });
    });
};

module.exports = initialize;