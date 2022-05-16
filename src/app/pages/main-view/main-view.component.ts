import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public board: Board = new Board('Test Board', [
    new Column('Dashboard', [
      'Gráfico de Linha', 'Gráfico de Barra', 'Gráfico de Pizza', 'Gráfico Legal'
    ])
  ]);

  public factor: Board = new Board('Test Board', [
    new Column('', [
      'Gráfico de Barra', 'Gráfico de Pizza', 'Gráfico de Linha', 'Gráfico Legal'
    ])
  ]);

  factory = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Cubicpoly.svg/800px-Cubicpoly.svg.png ';

  showFiller = false;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

}
