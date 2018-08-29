let request = require('request');
let userDetails;

function initialize() {
	var options = {
		url: 'https://api.github.com/users/sriharshakappala',
		headers: {
			'User-Agent': 'request'
		}
	};
	return new Promise(function(resolve, reject) {
		request.get(options, function(err, resp, body) {
			if(err) {
				reject(err);
			} else {
				resolve(JSON.parse(body));
			}
		})
	})
}

function main() {
	initializePromise = initialize();
	initializePromise.then(function(result) {
		userDetails = result;
		console.log(userDetails);
		return userDetails;
	}, function(err) {
		console.log(err);
	}).then(function(result) {
		console.log(result.public_repos);
	})
}

main();
