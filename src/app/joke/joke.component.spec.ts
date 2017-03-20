import { JokeComponent } from './joke.component';
import { Component, DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { JokeService } from './joke.service';
import { By } from '@angular/platform-browser';
describe(`Component: Joke Component`, () => {

    let fixture: ComponentFixture<JokeComponent>;
    let component: JokeComponent;
    let jokeService: any;
    let de: DebugElement;

    beforeEach(() => {
        jokeService = {
            getJoke: () => Observable.of('FAKE JOKE')
        };

        TestBed.configureTestingModule({
            declarations: [JokeComponent],
            imports: [HttpModule],
            providers: [
                JokeService
            ]
        });

        fixture = TestBed.createComponent(JokeComponent);
        component = fixture.componentInstance;
        jokeService = TestBed.get(JokeService);
        de = fixture.debugElement;
    });


    it(`should add 1 + 1`, () => {
        expect(1 + 1).toEqual(2);
    });

    it(`should have a title of 'Chuck Norris quotes`, () => {
        expect(component.title).toEqual('Chuck Norris Jokes');
    });

    it('should set the joke property when component intiialised', () => {
        spyOn(jokeService, 'getJoke')
            .and.returnValue(Observable.of('FAKE JOKE'));

        fixture.detectChanges();

        expect(component.joke).toEqual('FAKE JOKE');
    });

    it(`should have joke content bound onto the page`, () => {
        spyOn(jokeService, 'getJoke')
            .and.returnValue(Observable.of('FAKE JOKE'));

        fixture.detectChanges();

        let el = de.query(By.css('p')).nativeElement;

        expect(el.textContent).toEqual('FAKE JOKE');
    });
});
