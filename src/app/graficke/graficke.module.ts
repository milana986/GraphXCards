import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GrafickeRoutingModule } from './graficke-routing.module';
import { GrafickeService } from './services/graficke.service';
import { GrafickeListComponent } from './graficke-list/graficke-list.component';
import { PaginationComponent } from './graficke-list/pagination/pagination.component';
import { PageSizeComponent } from './graficke-list/page-size/page-size.component';
import { GrafickaDetailComponent } from './graficke-list/graficka-detail/graficka-detail.component';
import { CommentsComponent } from './graficke-list/comments/comments.component';
import { CommentsFormComponent } from './graficke-list/comments/comments-form/comments-form.component';
import { CommentsListComponent } from './graficke-list/comments/comments-list/comments-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgbModule,

    GrafickeRoutingModule

  ],
  declarations: [GrafickeListComponent, PaginationComponent, PageSizeComponent, GrafickaDetailComponent, CommentsComponent, CommentsFormComponent, CommentsListComponent],
  providers: [GrafickeService]
})
export class GrafickeModule { }
