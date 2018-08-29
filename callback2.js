function doHomework(subject, cb) {
	console.log(`Doing Homework ${subject}`);
	cb();
}

doHomework('Maths', function() {
	console.log('Done homework');
})

doHomework('Social', function() {
	console.log('Done homework of less interesting subject');
})

function finished() {
	console.log('Finished main homework');
}

doHomework('english', finished)
