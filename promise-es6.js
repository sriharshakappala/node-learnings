const isMomHappy = true;

const willIGetNewPhone = new Promise((resolve, reject) => {
	if(isMomHappy) {
		let phone = {
			brand: 'One Plus 6',
			color: 'Midnight Black'
		}
		resolve(phone);
	} else {
		let reason = new Error('Mom is not happy');
		reject(reason)
	}
})

let showOff = (phone) => {
	return new Promise(function(resolve, reject) {
		let message = `Hey, I got a ${phone.color} ${phone.brand}`;
		resolve(message);
	})
}

var askMom = () => {
	// willIGetNewPhone.then(function(mobile) {
	console.log('Before asking mom!');
	willIGetNewPhone.then(showOff).then(function(mobile) {
		console.log(mobile);
	}, function(err) {
		console.log('error part');
		console.log(err);
	}).catch(function(err) {
		console.log(err);
	})
	console.log('After asking mom!');
}

askMom();
