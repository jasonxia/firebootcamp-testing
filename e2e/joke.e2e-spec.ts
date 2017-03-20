import { JokePage } from './joke.po';

describe(`Page: Joke Page`, () => {
  it(`should have a title of "Chuck Norris Jokes"`, async () => {
    JokePage.navigateTo();

    const title = await JokePage.getTitleText();

    expect(title).toEqual('Chuck Norris Jokes');
  });

  it(`should have a new joke on button click`, async () => {
    JokePage.navigateTo();

    const firstJoke = await JokePage.getParagraphText();

    JokePage.getNextQuote();

    const secondJoke = await JokePage.getParagraphText();

    expect(firstJoke).not.toEqual(secondJoke);
  });
});
