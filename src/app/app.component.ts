import { Component, OnInit,Input } from '@angular/core';
import { VIDEOS } from './mock-video';
import { Videos } from './videos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular_1';
  videos = VIDEOS;
  @Input() video?: Videos

  constructor() { }

  ngOnInit(): void {
  }
}
