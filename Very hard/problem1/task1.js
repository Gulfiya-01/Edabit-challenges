function overTime(arr) {
    let sum = 0;
    let sumOver =0;
    let sumBegin =0;
    let start = arr[0];
    let end = arr[1];
    let hour = arr[2];
    let multiply = arr[3];
    function summa(){
      if(start>17){
         sum =(end - start)*hour*multiply;
      }
      else if(end>17) {
       sumOver = (end - 17)*hour*multiply;
       sumBegin = (17- start)*hour;
       sum = sumOver+sumBegin;
    } else {
        sum = (end - start)*hour;
    }
    
        return sum;
}
    const over= "$"+summa().toFixed(2).toString();
    return over;

}

export default overTime;