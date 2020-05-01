import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Supplychain';
  optionArr = ["Extracter","Transporter","Processor","Refinery"]
  
  ngOnInit(){
  
  }
}
