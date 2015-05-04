//Andrew Klump
//CMP344
//Final
//Javascript 101 problem #1


//multiply function
var multiply =  function(x,y){
//increments both functions
	x = inc(x);
	y = inc(y);
//returns nubmers multipied together
return x*y;	


}

//increment fucntion
var inc = function(x){
	//returns the same number plus 1
	return x +=1;

}

//print 16 - whcih is 4*4 both incrimented
console.log(multiply(3,3));

//prints 90 - should be 9*10
console.log(multiply(8,9));





