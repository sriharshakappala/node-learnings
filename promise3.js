const customPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('First Command');
	}, 0);
});

console.log('Second Command');
