import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    BaseComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: 'app',
        component: BaseComponent,
        children: [
          {
            path: 'user',
            component: UserComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: []
})
export class BaseModule { }
