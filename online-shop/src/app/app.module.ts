import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';

import { ItemColorService } from "app/_services/item-color/item-color.service";
import { ItemCostService } from "app/_services/item-cost/item-cost.service";
import { ItemSizeService } from "app/_services/item-size/item-size.service";
import { ItemsSearchComponent } from './items-search/items-search.component';
import { ItemListService } from "app/_services/item-list/item-list.service";

@NgModule({
  declarations: [
    AppComponent,
    OnlineShopComponent,
    ItemsSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ItemColorService,
    ItemCostService,
    ItemSizeService,
    ItemListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
