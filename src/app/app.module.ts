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
    ItemRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
