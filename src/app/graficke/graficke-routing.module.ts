import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';

import { GrafickeListComponent } from './graficke-list/graficke-list.component';
import { CommentsComponent } from './graficke-list/comments/comments.component';

const routes:Routes = [
	{ path: 'cards' , component: GrafickeListComponent,
    children: [
			{path: ':id/comments', component: CommentsComponent}
		]
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
  	RouterModule
  ]
})
export class GrafickeRoutingModule { }
