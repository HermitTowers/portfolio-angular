import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { ImageDetails } from '../models/imageDetails';
import { first, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public content: string[];
    public soloLearnImages: ImageDetails[];

    constructor(private aboutService: AboutService) { }

    ngOnInit() {
    this.aboutService.getContent().pipe(
        withLatestFrom(this.aboutService.getSololearnPictures()),
        first()
        ).subscribe(([content, soloLearnImages]) => {
            this.content = content;
            this.soloLearnImages = soloLearnImages;
        });
    }
}
