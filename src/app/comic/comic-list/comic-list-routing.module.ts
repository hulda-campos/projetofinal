import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicListPage } from './comic-list.page';

const routes: Routes = [
  {
    path: '',
    component: ComicListPage
  },
  {
    path: 'comic-detail',
    loadChildren: () => import('./comic-detail/comic-detail.module').then( m => m.ComicDetailPageModule)
  },
  {
    path: 'edit-comic',
    loadChildren: () => import('./edit-comic/edit-comic.module').then( m => m.EditComicPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicListPageRoutingModule {}
