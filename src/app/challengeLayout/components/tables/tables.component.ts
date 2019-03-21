import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  arr = [];
  limit: number = 100;
  constructor() {
    this.counterMeth();
  }
  ngOnInit() {
  }
  counterMeth(){
    for(let index = 1 ; index <= this.limit; index++) {
      let oddCheck: boolean = true;
      let content: string;
      let contentArr: Array<string> = [];
      if (index % 2 === 0) {
        oddCheck = false;
      }
      if (index % 3 === 0) {
        content = 'happy.png';
      }
      if (index % 5 === 0) {
        content = 'sad.png';
      }
      if (index % 15 === 0) {
        contentArr.push('happy.png' , 'sad.png');
      }
      this.arr.push({'id': index , 'odd': oddCheck , 'content' : content , 'contentArr': contentArr})
      console.log(index)
    }
  }
}
