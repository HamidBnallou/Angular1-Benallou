import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-vues',
  templateUrl: './vues.component.html',
  styleUrls: ['./vues.component.css']
})
export class VuesComponent {
  @Input() nombre_vues? = 0; 
  constructor() { }
  ngOnInit(): void {
  }
}
