function sevenBoom(arr) {
	const array = [...arr];
	let text = array.toString();

	for(let i=0;i<text.length;i++){
	    if (text[i]==7){
	        return "Boom!"
	    }
	    
	}
  return "there is no 7 in the array"
}
export default sevenBoom;