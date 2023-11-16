import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.css']
})
export class DureeComponent {
  @Input() duree? = 0; 
  constructor() { }
  ngOnInit(): void {
  }
}
