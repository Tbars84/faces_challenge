import { Component, OnInit, Input } from '@angular/core';
import { tableIn } from '../../models/tableObjectIN';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  @Input() arrayTables: tableIn[] ;
  constructor() {}
  ngOnInit() {}
}