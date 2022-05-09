import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public board: Board = new Board('Test Board', [
    new Column('A Fazer', [
      'Ir trabalhar', 'Ir ao mercado', 'Voltar para casa', 'Dormir'
    ]),
    new Column('Em Produção', [
      'Almoçar', 'Jantar', 'Jogar', 'Estudar'
    ]),
    new Column('Feitas', [
      'Levantar', 'Escovar os dentes', 'Tomar banho', 'Checar E-mails', 'Passear com o cachorro'
    ])
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
