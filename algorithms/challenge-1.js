function countTruthy(arr) {
	const truthy = [];
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i] != 0) && ( typeof arr[i] == 'number') ) {
			truthy.push(arr[i]);
		}
	}
	return truthy.length;

}
module.exports = countTruthy