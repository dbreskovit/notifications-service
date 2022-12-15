import { Content } from './content';

describe('Notification content', () => {
it('it should be able to create a notification content', () => {
  const content = new Content('Você rebebeu uma nova mensagem');
  expect(content).toBeTruthy();
});

it('it should not be able to create a notification content with less than 5 characters', () => {
  expect(() => new Content('a')).toThrow();
});

it('it should not be able to create a notification content with less than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });

});