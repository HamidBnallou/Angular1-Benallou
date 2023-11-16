import { Component  , Input} from '@angular/core';

@Component({
  selector: 'app-nom',
  templateUrl: './nom.component.html',
  styleUrls: ['./nom.component.css']
})
export class NomComponent {
  @Input() nom? = ''; 
  constructor() { }
  ngOnInit(): void {
  }
}
