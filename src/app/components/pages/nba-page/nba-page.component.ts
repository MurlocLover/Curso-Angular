import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-page',
  templateUrl: './nba-page.component.html',
  styleUrls: ['./nba-page.component.css']
})
export class NbaPageComponent implements OnInit {
  btnText = 'Pesquisar!';

  constructor() { }

  ngOnInit(): void {
  }

}
