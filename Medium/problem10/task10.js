function arrayOfMultiples (num, length) {


	let res=[];
	for(let i=num;i<=num*length;i+=num ){

	    res.push(i)

	}
	    return res;

}

export default arrayOfMultiples;