

function randomMyArray(arr){

      

 var finalArray = [];

 var arryLength = arr.length;

        for(var i=0;i<arryLength;i=i+1){

            
        	  var randomIndex = Math.floor(Math.random()*arr.length);

        	  finalArray.push(arr[randomIndex]);
        	  arr.splice(randomIndex,1);


        }

	return finalArray;
	

}



 
   