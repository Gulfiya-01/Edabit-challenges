function isHappy(n) {
    const seen = new Set(); 
  
    while (n !== 1 && n !== 4 && !seen.has(n)) {
      seen.add(n);
  
      const digits = n.toString().split("");
      const num = digits.map(Number);
  
      let sum = 0;
      for (let i = 0; i < num.length; i++) {
        sum += num[i] ** 2;
      }
  
      n = sum;
    }
  
    return n === 1; 
  }

  export default isHappy;