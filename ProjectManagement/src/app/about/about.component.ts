import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  sum : number;
  sub : number;
  constructor(private calc : CalculatorService)
  {
    this.sum=calc.getAddition(10,200);
    this.sub=calc.getSubtraction(100,500);
  }
}
