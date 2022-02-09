import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesignerLinenLayoutComponent } from './store/designer-linen-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Designer-Linen', component: DesignerLinenLayoutComponent},
  {path: 'home', component: HomeLayoutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
