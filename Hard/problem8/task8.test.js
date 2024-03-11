import { describe, expect, test} from 'vitest';
import Shiritori from './task8'; 


describe('Shiritori Game Tests', () => {
  let my_shiritori;

  test('initial game state', () => {
    my_shiritori = new Shiritori();
    expect(my_shiritori.game_over).toBe(false);
  });

  test.each([
    ['apple', ['apple']],
    ['ear', ['apple', 'ear']],
    ['rhino', ['apple', 'ear', 'rhino']],
    ['ocelot', ['apple', 'ear', 'rhino', 'ocelot']],
  ])('play: %s', (input, expected) => {
    expect(my_shiritori.play(input)).toEqual(expected);
  });

  test('game over due to Rule 1 violation', () => {
    my_shiritori.play('oops');
    expect(my_shiritori.game_over).toBe(true);
    expect(my_shiritori.words).toEqual(['apple', 'ear', 'rhino', 'ocelot']);
  });

  test('restart game', () => {
    expect(my_shiritori.restart()).toBe('game restarted');
    expect(my_shiritori.words).toEqual([]);
    expect(my_shiritori.game_over).toBe(false);
  });

  test.each([
    ['hostess', ['hostess']],
    ['stash', ['hostess', 'stash']],
    ['hostess', 'game over', 'Rule 2 violation'],
  ])('play: %s', (input, expected, comment) => {
    const result = my_shiritori.play(input);
    expect(result).toEqual(expected);
    if (comment) {
      console.log(comment);
    }
  });

  // Additional test cases can be added as needed
});
