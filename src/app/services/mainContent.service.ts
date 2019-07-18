import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ImageDetails } from '../models/imageDetails';

@Injectable({
  providedIn: 'root'
})
export class MainContentService {
    constructor(private http: HttpClient) {}

    public getMainContent(): Observable<string[]> {
        return of(this.getMainContentBlurb());
    }

    public getProfilePictures(): Observable<ImageDetails[]> {
        return of(this.getProfilePathList());
    }

    private getMainContentBlurb(): string[] {
        return [
            `I have been a Web Developer and Programmer since 1997 and have worked as both full time and as a contractor.
            Those very different environments have given me many different skills and
            experiences. With contracting, I learned how to adapt. Every company has their own way of doing things and in a
            short time I need to fit in and be able to code. With a full time position, it
            tends to be the number of ‘hats’ that I am required to wear that becomes the challenge on top of how I fit in
            the team and the work that is required.`,
            `Even with all that experience, I am not a ‘guru’. Programming, working with code, and building something
            exciting and robust can be the most fun thing and I can 'lose' hours trying to figure
            out one more coding problem. I may not know all the tricks or even all the buzzwords in the industry, but I am
            proud of my ability to adapt and use my past experience and varied skills to
            tackle any challenge, but I am not an expert in any one skill. I know a lot of things from different points of
            view. I am trying to learn new things and remember what I have forgotten.`,
            `I can work alone, but I enjoy more working with a team. We can all work together and bring our individual
            skills, knowledge, and experiences together to accomplish any goal. I am most happy
            fitting in where I can do the most good. I do not need the 'lime light', nor do I need to work on 'bleeding
            edge' technologies. Don't get me wrong I LOVE new technology, but I am not in a such
            a hurry to grab on and use it that I forgot to look where I am going on a current project.`
        ];
    }

    private getProfilePathList(): ImageDetails[] {
        return [
            new ImageDetails(1, 'KeepCalmBeWeird', 'profilePictures/profilePic_1.jpg'),
            new ImageDetails(2, 'Bruichladdich', 'profilePictures/profilePic_2.jpg'),
        ];
    }

}

