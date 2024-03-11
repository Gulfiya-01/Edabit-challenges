function countBoomerangs(arr) {

	let count =0;
	
        for(let i=1;i<=arr.length-2;i++){
           
        if(arr[i]==arr[i-1]&&arr[i]==arr[i+1]){
             count;
             }
             else if (arr[i-1]===arr[i+1]){
             count++;
            }
        }
          return count
    

}
 export default countBoomerangs;