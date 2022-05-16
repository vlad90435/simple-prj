import { Component, Input, OnInit } from '@angular/core';
import { IGames } from "../../models/games.interface";

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  @Input() public data:IGames
  constructor() { }

  ngOnInit(): void {
  }

}
