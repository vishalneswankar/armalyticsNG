import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotterComponent } from './spotter/spotter.component';
import { kpigridComponent } from './spotter/kpigrid.component';

const routes: Routes = [
  {path: '', redirectTo: '/spotter', pathMatch: 'full'},
  {path: 'spotter', component: SpotterComponent},
  {path: 'kpigrid', component: kpigridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
