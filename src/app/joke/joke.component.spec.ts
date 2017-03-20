import { JokeComponent } from './joke.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

describe(`Component: Joke Component`, () => {
    let component: JokeComponent;
    let jokeService: any;

    beforeEach(() => {
        jokeService = {
            getJoke: () => Observable.of('FAKE JOKE')
        };

        component = new JokeComponent(jokeService);
    });

    it(`should add 1 + 1`, () => {
        expect(1 + 1).toEqual(2);
    });

    it(`should have a title of 'Chuck Norris Jokes`, () => {
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    it('should set the joke property when component intiialised', () => {
        spyOn(jokeService, 'getJoke')
            .and.returnValue(Observable.of('FAKE JOKE'));

        component.ngOnInit();

        expect(component.joke).toEqual('FAKE JOKE');
    });

});
