import { Component, Input, OnInit } from '@angular/core';
import { Videos } from '../../videos';


@Component({
  selector: 'app-petite-video',
  templateUrl: './petite-video.component.html',
  styleUrls: ['./petite-video.component.css']
})
export class PetiteVideoComponent implements OnInit{
  @Input() video?: Videos; 
  constructor() { }

  ngOnInit(): void {
  }

}
