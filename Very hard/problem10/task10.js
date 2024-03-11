function sumsPowersTwo(n) {
    let binaryRepresentation = [];
    let powersOfTwo = [];
let sum =[];
    while (n > 0) {
        binaryRepresentation.push(n % 2);
        n = parseInt(n / 2, 10);
    }

    for (let i = 0; i < binaryRepresentation.length; i++) {
        if (binaryRepresentation[i] == 1) {
            powersOfTwo.push(i);
        }
    }

   
  powersOfTwo.forEach((element)=> {
       sum.push (2**(element))
       
   });
return sum;
}
export default sumsPowersTwo;