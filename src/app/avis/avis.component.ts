import { Component,Input, OnInit } from '@angular/core';
import { Avis } from '../avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit{
  @Input() avis?: Avis; 
  constructor() { }

  ngOnInit(): void {
  }
}
