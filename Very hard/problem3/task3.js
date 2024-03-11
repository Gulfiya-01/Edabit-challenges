function doesTriangleFit(brick, hole) {
    let sum1 =0;
    let area1 = 0;
    let sum2 =0;
    let area2 = 0;
    while(brick[0]+brick[1]>brick[2]&&brick[0]+brick[2]>brick[1]&&brick[1]+brick[2]>brick[0]&&hole[0]+hole[1]>hole[2]&&hole[0]+hole[2]>hole[1]&&hole[1]+hole[2]>hole[0]){
    const firstTriangle = brick.forEach((element)=>{
     sum1 +=element;
     area1 = sum1/2;
 })
  const secondTriangle = hole.forEach((element)=>{
     sum2 +=element;
     area2 = sum2/2;
 })
 if (area1 <= area2){
    return true;
}

 else return false;
}
return false;
    }



export default doesTriangleFit;