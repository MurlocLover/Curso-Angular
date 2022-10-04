import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  name: string = 'Lebron James';
  time: string = 'Los Angeles Lakers';
  role: string = 'Ala';
  pts: number = 30.3;
  rebs: number = 8.2;
  assists: number = 6.2;

  constructor() { }

  ngOnInit(): void {
  }

}
