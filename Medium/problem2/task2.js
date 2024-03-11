function countTrue(arr) {
	let count=0;
	if(arr.length==0){
	    return 0;
	}
	for(let i=0;i<arr.length;++i){
	 
        if( arr[i]===true){
	       count++;
	   }
	}
	 return count;
}
export default countTrue;