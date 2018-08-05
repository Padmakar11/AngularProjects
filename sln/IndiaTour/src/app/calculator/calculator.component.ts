import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public a:number=10;
  public b:number=10;

  @Output()
  public c:number=90;

  public addNumber()
  {
    this.c=this.a+this.b;
  }
}
