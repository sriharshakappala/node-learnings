function first(){
	setTimeout(function() {
		console.log(1);
	}, 1500);
}

function second(){
	console.log(2);
}

first();
second();
