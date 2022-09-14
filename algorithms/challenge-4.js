function calculateGrade(marks) {
	var sum_of_arr = marks.reduce(function(a, b){
        return a + b;
    }, 0);
    var array_average = Math.round(sum_of_arr/marks.length);
    if (array_average<=49) {
    	return "F";
    }else if (array_average<=59) {
    	return "E";
    }else if (array_average<=69) {
    	return "D";
    }else if (array_average<=79) {
    	return "C";
    }else if (array_average<=89) {
    	return "B";
    }else if (array_average<=100) {
    	return "A";
    }else{
    	return array_average;
    }
 
}
module.exports =calculateGrade