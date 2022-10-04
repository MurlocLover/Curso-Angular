import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nba-form',
  templateUrl: './nba-form.component.html',
  styleUrls: ['./nba-form.component.css']
})
export class NbaFormComponent implements OnInit {
  @Input() btnText!: string

  constructor() { }

  ngOnInit(): void {
  }

}
