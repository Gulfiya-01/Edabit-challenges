function isDisarium(n) {
        const arr = n.toString();
        let sum = 0;
      
        for (let i = 0; i < arr.length; i++) {
          const digit = Number(arr[i]);
          sum += Math.pow(digit, i + 1);
        }
      
        return sum === n;
      }

export default isDisarium;