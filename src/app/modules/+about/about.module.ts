import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { routes } from './about.routes';

import { MaterialModule } from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import { FsUsersComponent } from './components/fs-users/fs-users.component';
import { FsDialogComponent } from '../../shared/components/fs-dialog';
import { FsYoutubeAPIComponent } from '../../shared/components/fs-youtube-api';
import { fsYoutubeApiPipeFilterSearch } from '../../shared/components/fs-youtube-api';
import { FsTwitterAPIComponent } from '../../shared/components/fs-twitter-api';

@NgModule({
  declarations: [
    AboutComponent,
    FsDialogComponent,
    FsYoutubeAPIComponent,
    FsTwitterAPIComponent,
    fsYoutubeApiPipeFilterSearch,
    FsUsersComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    RouterModule.forChild(routes),
    MaterialModule.forRoot(),
  ]
})

export class AboutModule {
  static routes = routes;
}
