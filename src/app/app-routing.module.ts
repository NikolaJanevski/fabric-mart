import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DesignerLinenLayoutComponent } from './store/designer-linen-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';
import { FamousDressDesignerComponent } from './store/famous-dress-designer/famous-dress-designer.component';
import { HighEndDesignerComponent } from './store/high-end-designer/high-end-designer.component';
import { DesignerFabricsComponent } from './store/designer-fabrics/designer-fabrics.component';
import { DesignerFabricsCategoriesMainComponent } from './store/designer-fabrics-categories-main/designer-fabrics-categories-main.component';
import { DesignerFabricsCategoriesSidemenuComponent } from './store/designer-fabrics-categories-sidemenu/designer-fabrics-categories-sidemenu.component';
import { ProductFilterFormSidemenuComponent } from './store/product-filter-form-sidemenu/product-filter-form-sidemenu.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {
    path: 'designer-fabrics', 
    component: DesignerFabricsComponent,
    children: [
      {path: 'famous-dress-designer', component: FamousDressDesignerComponent, outlet: "right"},
      {path: 'high-end-designer', component: HighEndDesignerComponent, outlet: "right"},
      {path: 'Designer-Linen', component: DesignerLinenLayoutComponent , outlet: "right"},
      {path: 'product-filter-form', component: ProductFilterFormSidemenuComponent , outlet: "left"},
      {path: '', component: DesignerFabricsCategoriesMainComponent , outlet: "right"},
      {path: '', component: DesignerFabricsCategoriesSidemenuComponent , outlet: "left"},
    ]
  }
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
