import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesignerLinenLayoutComponent } from './store/designer-linen-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';
import { FamousDressDesignerComponent } from './store/famous-dress-designer/famous-dress-designer.component';
import { HighEndDesignerComponent } from './store/high-end-designer/high-end-designer.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Designer-Linen', component: DesignerLinenLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'famous-dress-designer', component: FamousDressDesignerComponent},
  {path: 'high-end-designer', component: HighEndDesignerComponent}
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
