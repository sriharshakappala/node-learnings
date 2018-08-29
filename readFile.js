let fs = require('fs')

// fs.readFile('./callback1.js', 'utf8', (err, content) => {
// 	if(err) {
// 		console.error(err);
// 	} else {
// 		console.log(content);
// 	}
// })

let readFileCustom = () => {
	return new Promise((resolve, reject) => {
		fs.readFile('./callback11.js', 'utf8', (err, content) => {
			if(err) {
				reject(err)
			} else {
				resolve(content)
			}
		})
	});
}

readFileCustom().then((content) => {
	console.log(content);
}, (err) => {
	console.error(err);
})

// readFileCustom.then((content) => {
// 	console.log(content);
// }, (err) => {
// 	console.error(err);
// })
