function f1() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'number')
			continue
		sum = sum + arguments[i]

	}
	console.log(sum);
}
f1(48, 351, 56, 30, 85, 96);

function max(Array) {
	
	if (Array === undefined) {
		return;
	} else {


		var MaxNum = Array[0];
		for ( var i = 0; i < Array.length; i++) {
			if (Array[i] >= MaxNum) {
				MaxNum = Array[i];
			}

		}
		return MaxNum;
	}
}
max([98, 93, 75, 73, 6666]);



// function min(array) {
// var MinNum = Array[0];
// for(var i = 0; i < Array.length; i++);
// if (Array[i] < MinNum){
// 	MinNum = Array[i]
// }
// }



