import { Component,OnInit,Input } from '@angular/core';
import { Videos } from '../videos';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit{
  @Input() video?: Videos; 

  constructor() { }

  ngOnInit(): void {
  }
}
