import { JokeComponent } from './joke.component';
describe(`Component: Joke Component`, () => {
    it(`should add 1 + 1`, () => {
        expect(1 + 1).toEqual(2);
    });

    it(`should have a title of 'Chuck Norris Jokes`, () => {
        const component = new JokeComponent(null);
        expect(component.title).toEqual('Chuck Norris Jokes');
    });
});
