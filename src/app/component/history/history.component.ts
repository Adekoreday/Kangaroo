import { Component, OnInit } from '@angular/core';
import {KangarooService} from '../../service/kangaroo.service';

export interface PeriodicElement {
  fields: string;
  resultStatus: number,
  date: string
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: PeriodicElement[];
  displayedColumns: string[] 
  constructor(private kgservice: KangarooService) { 

  }

  ngOnInit(): void {
    const val = localStorage.getItem('history');
    this.displayedColumns = ['S/N', 'date', 'fields', 'result'];
    if(val) {
      this.history = JSON.parse(val);
    }
  }

}
