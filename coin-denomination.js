//computes the number of ways to make the amount of money with coins of the available denominations.
// Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


//solution: 

function calculate (amount, array) {
	var arr = [];  
  for( let i=0; i < array.length; i++ ) { 
  	var sum = array[i];  
    var subArr = [array[i]];  
    var num = 0;
    while (num < array.length) {  
			if (sum > amount) {
      	sum = array[i];
      	subArr = [array[i]];
      	num++;
      }
			if ( sum === amount ) { 
        if (JSON.stringify(arr).includes(JSON.stringify(subArr.sort())) === false) {
          arr.push(subArr.sort());
       	 	sum = array[i];
      		subArr = [array[i]];
      		num++;
        }
      }
			sum += array[num]; 
      subArr.push(array[num]); 
    }
  }
  return arr.length;
}
