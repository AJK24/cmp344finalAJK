//Andrew KLump
//CMP344
//Final exam
//javascripte101 - problem #2


var total = 0;

var addself = function(x,y){

	if(y > 1){
		y--;
//		x+=x;
//console.log(x);
		addself(x,y);
	//	x += x;		
	//	addself(x,y);
			
	}
	total += x;	
//	x += x;
	console.log(total);



return total;  


}


var clear = function(){
	return total = 0;


}

//should print 18
console.log(addself(6,3));

clear();
//should print 9
console.log(addself(3,3));


clear();
//should print out 32
console.log(addself(8,4));

