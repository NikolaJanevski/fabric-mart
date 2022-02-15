import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { CategoryCardComponent } from './categories/category.card.component';
import { PromotionsCarouselComponent } from './categories/promotions.carousel.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SocialFooterComponent } from './navigation/footer/social.footer.component';
import { SecondTopNavBarComponent } from './navigation/second.topnavbar.component';
import { HorizontalCardComponent } from './store/horizontal.card.component';
import { ItemRowComponent } from './store/item.row.component';
import { VerticalCardComponent } from './store/vertical.card.component';
import { AppRoutingModule } from './app-routing.module';
import { DesignerLinenLayoutComponent } from './store/designer-linen-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';
import { FamousDressDesignerComponent } from './store/famous-dress-designer/famous-dress-designer.component';
import { HighEndDesignerComponent } from './store/high-end-designer/high-end-designer.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    FooterComponent,
    SocialFooterComponent,
    CategoryCardComponent,
    PromotionsCarouselComponent,
    VerticalCardComponent,
    HorizontalCardComponent,
    ItemRowComponent,
    DesignerLinenLayoutComponent,
    HomeLayoutComponent,
    FamousDressDesignerComponent,
    HighEndDesignerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
