import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  public profileImagePath = '../assets/images/profilePic_2.jpg';
  constructor() { }

  ngOnInit() {
  }

}
