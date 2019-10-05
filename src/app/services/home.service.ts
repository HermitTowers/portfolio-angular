import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ImageDetails } from '../models/imageDetails';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient) {}

    public getContent(): Observable<string[]> {
        return of(this.getMainContentBlurb());
    }

    public getProfilePictures(): Observable<ImageDetails[]> {
        return of(this.getProfilePathList());
    }

    private getMainContentBlurb(): string[] {
        return [
            `I have been a Web Developer and Programmer since 1997 and have worked both full time and as a contractor. Each perspective has
             shown me a different experience between development environments.  As a contractor, I find I struggle to adapt to the
             environment and the code base to get the work done swiftly and without trying to rewrite large portions.  With a full time
             position, I find the challenges are to learn where I fit on the team, to learn about the code base and coding standards, and
             how I can contribute to team growth. Every company has their own way of doing things. I find it sad to say that sometimes
             it’s the egos of fellow developers and members of management that prove the most difficult to work with.`,
            `Even with the experience I have, I do not like calling myself an expert. Programming can be challenging and fun and I have
             become so focused as to lose track of time trying to figure out some coding problems. I have the formal education that forms
             the foundation of my skills, but I have learned more while working than anywhere. Unfortunately, working as a contractor has
             led me down a wandering path. My skills tend to be eclectic through experience rather than reading publications. As an
             example, I learned that I had misunderstood when asked about my understanding of solid programming. I had not known that
             SOLID is a set of object-oriented programming principles. Granted, after looking them up, they seemed pretty standard to
             what I knew from experience, but I had not known them as a formal set. Since then I have been better in looking up terms,
             even if I assume I understand their meaning. I have also started to focus more on standard current skills sets like
             Angular and C#.`,
            `My preferred working environment is within a team of like minded nerds and geeks that can collaborate on projects. Although,
             there are times I like to work alone without any distractions, or at least an environment I can control. Having the option to
             work remotely is nice, but working in an office with my peers can be better for collaboration. It feels strange to mention,
             but feeling comfortable to talk with my colleagues either in person or by some other means does not seem to always be
             common. Egos, idiosyncrasies, personal bias, and many other things can make interaction challenging, but a good team will
             work it out. `
        ];
    }

    private getProfilePathList(): ImageDetails[] {
        return [
            new ImageDetails(1, 'Social', 'profilePictures/me_out.jpg'),
            new ImageDetails(3, 'Bruichladdich', 'profilePictures/me_motorbike.jpg'),
        ];
    }

}

