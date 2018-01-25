/**
 * 	This function returns an array with unique random numbers in it.
 *	@param int min the lowest value a random can have 
 *	@param int max the highest value a random can have
 *	@param int number declares how many random numbers the returning array contains
 *	@return array array
 */
function randomInts(min, max, number){
	var randomInt = function(){
		return Math.floor(Math.random() * (max - min) + min);
	};
	var array = [], found = false, rand = randomInt(), possibleCount = Math.abs(min-max);

	if(number > possibleCount || number <= 0){
		return "check your arguments";
	}
	for(var i = 0; i < number; i++){
		found = false;
		while(!found){
			if(array.indexOf(rand) == -1){
				array.push(rand);
				found = true;
			}else{
				rand = randomInt()
			}
		}	
	}
	return array;
}