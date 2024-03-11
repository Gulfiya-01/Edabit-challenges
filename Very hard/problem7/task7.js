function findFrequent(array) {

    if(array.length == 0)
        return null;
    let modeMap = {};
    let maxEl = array[0];
    let  maxCount = 1;
    for(let i = 0; i < array.length; i++)
    {
        let el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

export default findFrequent;