import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './reimbursement/create/create.component';
import { IndexComponent } from './reimbursement/index/index.component';

const routes: Routes = [
  { path: 'reimbursement', component: IndexComponent },
  { path: 'reimbursement/create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
