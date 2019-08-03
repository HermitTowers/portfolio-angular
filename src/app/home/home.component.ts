import { Component, OnInit } from '@angular/core';
import { withLatestFrom, first } from 'rxjs/operators';


import { HomeService } from '../services/home.service';
import { ImageDetails } from '../models/imageDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public mainContent: string[];
    public profileImages: ImageDetails[];

    constructor(private mainService: HomeService) { }

    ngOnInit() {
        this.mainService.getContent().pipe(
            withLatestFrom(this.mainService.getProfilePictures()),
            first()
            ).subscribe(([mainContent, profilePictures]) => {
                this.mainContent = mainContent;
                this.profileImages = profilePictures;
            });
    }
}
