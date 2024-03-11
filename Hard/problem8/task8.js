class Shiritori {
    constructor() {
      this.words = [];
      this.game_over = false;
    }
  
    play(word) {
      if (this.words.length === 0 || this.words[this.words.length - 1].slice(-1) === word[0]) {
        if (!this.words.includes(word)) {
          this.words.push(word);
        } else {
          this.game_over = true;
          return 'game over';
        }
      } else {
        this.game_over = true;
        return 'game over';
      }
      return this.words;
    }
  
    restart() {
      this.words = [];
      this.game_over = false;
      return 'game restarted';
    }
  }
  
  export default Shiritori;
  