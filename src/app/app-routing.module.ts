import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighchartComponent } from './pages/highchart/highchart.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

const routes: Routes = [
  {
    path: '', component: MainViewComponent
  },
  {
    path: 'chart',
    component: HighchartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
