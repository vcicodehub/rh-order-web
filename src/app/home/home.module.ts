import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';

import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
        { path: '', component: WelcomeComponent },
        { path: 'soms', loadChildren: () => import('../ordermanagement/ordermanagement.module').then(m => m.ContactmanagerModule) },
        { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    WelcomeComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class HomeModule { }
