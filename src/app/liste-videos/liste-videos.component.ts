import { Component,  OnInit, Input } from '@angular/core';
import { Videos } from '../videos';
import { VIDEOS } from '../mock-video';

@Component({
  selector: 'app-liste-videos',
  templateUrl: './liste-videos.component.html',
  styleUrls: ['./liste-videos.component.css']
})
export class ListeVideosComponent implements OnInit{

  @Input() video?: Videos
  videos = VIDEOS
  constructor() { }

  ngOnInit(): void {
  }
}
