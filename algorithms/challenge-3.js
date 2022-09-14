function sumMix(arr) {
	var array = arr.map(function (x) { 
	  return parseInt(x, 10); 
	});

	var sum_of_arr = array.reduce(function(a, b){
        return a + b;
    }, 0);
	return sum_of_arr;
   
}
module.exports = sumMix