function filterList(arr) {
	var new_arr = [];

	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] == "number") {
			new_arr.push(arr[i]);
		}
	}
	return new_arr;
 
}
module.exports =filterList