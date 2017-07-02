function sum() {
	var sumOfNum = 0;
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] !== 'number')
			continue
		sumOfNum = sumOfNum + arguments[i]

	}
	return sumOfNum;
}
function min(array) {
    var minNum;
    var index;

    if (array === undefined) {
        return;
    } else {
        for (index = 0; index < array.length; index += 1) {
            if (typeof (array[index]) == 'number') {
                if (minNum === undefined) {
                    minNum = array[index];
                    continue;
                }
                if (minNum >= array[index]) {
                    minNum = array[index];
                }
            }
        }
        return minNum;

    }
}
function max(array) {
    var maxNum;
    var index;

    if (array === undefined) {
        return;
    } else {
        maxNum = array[0];

        for (index = 0; index < array.length; index += 1) {
            if (array[index] >= maxNum) {
                maxNum = array[index];
            }

        }
        return maxNum;
    }
}



