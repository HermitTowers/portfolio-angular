import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ImageDetails } from '../models/imageDetails';

@Injectable({
    providedIn: 'root'
  })
export class AboutService {
    constructor(private http: HttpClient) {}

    public getContent(): Observable<string[]> {
        return of(this.getAboutContentBlurb());
    }

    public getSololearnPictures(): Observable<ImageDetails[]> {
        return of(this.getSoloLearnPathList());
    }

    private getAboutContentBlurb(): string[] {
        return [
            `I am a NERD and a GEEK. I was born in the 70's and really grew up in the 80's. The 90's were my college years.
            All through that time, I was fascinated by Science Fiction and Fantasy. Strangely I was never drawn to one genre
            or fandom over another. I just liked anything that was super-science or magic like Star Trek or Star Wars or Tolkein
            or so many fantasy books I have lost count. I was, and still am, that Dungeons and Dragons nerd! Although I have
            branched out to other RPG; GURPS is my favorite, but I have Pathfinder, FATE, Traveller, BASIC Roleplaying System,
            D20, and others.`,

            `The next thing I would say influenced me was the SCA (Society for Creative Anachronism). The website’s mission statement
             says it best; ‘Mission Statement: The Society for Creative Anachronism (SCA) is an international non-profit volunteer
             educational organization. The SCA is devoted to the research and re-creation of pre-seventeenth century skills, arts,
             combat, culture, and employing knowledge of history to enrich the lives of participants through events, demonstrations,
             and other educational presentations and activities.’ This is where I learned what life was like before any modernization
             and how ‘easy’ our lives are now. I learned what it felt like to be in a group of strange, smart, and strong willed people.
             I have learned many good life lessons among friends while ‘playing’ in the SCA. Not all lessons are fun of course, so it
             was a good place to learn them.`,

            `While there are many other factors that make up my life, these days I have become a bit overly fascinated with Scotland. I
             found out that a small part of my heritage is from there. I really fell for the history and landscape. I discovered I really
             like Scottish whisky. While I am very bad at it, about once a year I try to learn Scottish Gaelic. If I had my way I would
             move there! Instead I will try to visit as often as possible and dream of visiting every year!`
        ];
    }

    private getSoloLearnPathList(): ImageDetails[] {
        return [
            new ImageDetails(1, 'HTML', 'soloLearn/sololearn_html.jpg'),
            new ImageDetails(2, 'JavaScript', 'soloLearn/sololearn_javascript.jpg'),
            new ImageDetails(3, 'SQL', 'soloLearn/sololearn_SQL.jpg'),
            new ImageDetails(4, 'C#', 'soloLearn/sololearn_csharp.jpg'),
            new ImageDetails(5, 'Java', 'soloLearn/sololearn_java.jpg'),
            new ImageDetails(6, 'C++', 'soloLearn/sololearn_cplusplus.jpg'),
        ];
    }
}
