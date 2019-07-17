import { Component, OnInit } from '@angular/core';
import { withLatestFrom, first } from 'rxjs/operators';


import { MainContentService } from '../services/mainContent.service';
import { ImageDetails } from '../models/imageDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public mainContent: string;
    public profileImages: ImageDetails[];

    constructor(private mainContentService: MainContentService) { }

    ngOnInit() {
        this.mainContentService.getMainContent().pipe(
            withLatestFrom(this.mainContentService.getProfilePictures()),
            first()
            ).subscribe(([mainContent, profilePictures]) => {
                this.mainContent = mainContent;
                this.profileImages = profilePictures;
            });
    }
}
