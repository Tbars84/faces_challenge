import { Component, OnInit } from '@angular/core';
import { tableIn } from '../../models/tableObjectIN';

@Component({
  selector: 'app-table-conteiner',
  templateUrl: './table-conteiner.component.html',
  styleUrls: ['./table-conteiner.component.scss']
})
export class TableConteinerComponent implements OnInit {
  arr: tableIn[] = [];
  limit: number = 100;
  constructor() {
    this.counterMeth();
  }
  ngOnInit() {
  }
  async counterMeth() {
    for(let index = 1 ; index <= this.limit; index++) {
      await this.checkConditions(index)
    }
  }
  checkConditions(index){
    let oddCheck: boolean = true;
    let content: string;
    let contentArr: any = [];
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
    this.arr.push({
      'id': index,
      'odd': oddCheck,
      'content' : content,
      'contentArr': contentArr
    })

  }

}
