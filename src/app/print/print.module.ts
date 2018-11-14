import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrintComponent } from './print.component';

@NgModule({
  declarations: [PrintComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: PrintComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {}
