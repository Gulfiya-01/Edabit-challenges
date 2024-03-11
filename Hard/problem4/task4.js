function isSmooth(sentence) {
    const words = sentence.split(/\s+/);
  
    for (let i = 0; i < words.length - 1; i++) {
      const lastLetter = words[i].slice(-1).toLowerCase();
      const firstLetterNext = words[i + 1].charAt(0).toLowerCase();
  
      if (lastLetter !== firstLetterNext) {
        return false;
      }
    }
  
    return true;
  }

  export default isSmooth;
  
