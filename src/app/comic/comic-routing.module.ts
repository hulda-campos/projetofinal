import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicPage } from './comic.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ComicPage,
    children: [
      {
        path: 'comic-list',
        children:[
          {
            path: '',
            loadChildren: () => import('./comic-list/comic-list.module').then( m => m.ComicListPageModule)
          },
          {
            path: ':comicId',
            loadChildren: () => import('./comic-list/comic-detail/comic-detail.module').then( m=> m.ComicDetailPageModule)
          }
        ]
      },
      {
        path: 'new',
        children: [
          {
            path: '',
            loadChildren: () => import('./new-comic/new-comic.module').then( m => m.NewComicPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/comic/tabs/comic-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/comic/tabs/comic-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicPageRoutingModule {}
