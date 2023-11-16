import { Component,OnInit , Input} from '@angular/core';
import { Videos } from '../videos';


@Component({
  selector: 'app-video-complete',
  templateUrl: './video-complete.component.html',
  styleUrls: ['./video-complete.component.css']
})
export class VideoCompleteComponent implements OnInit{
  @Input() video?: Videos; 
  constructor() { }

  ngOnInit(): void {
  }
}
