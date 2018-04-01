import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';

import { ColorService } from "app/_services/color.service";
import { ItemService } from "app/_services/item.service";
import { CategoryService } from "app/_services/category.service";
import { UserDataService } from "app/_services/user-data.service";

import { OnlineShopComponent } from './online-shop/online-shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemsSearchComponent } from './items-search/items-search.component';
import { ItemComponent } from './item/item.component';
import { LoadingComponent } from './loading/loading.component';

import { SelectItemCountComponent } from './ui/select-item-count/select-item-count.component';
import { SelectItemColorComponent } from './ui/select-item-color/select-item-color.component';
import { SelectItemSizeComponent } from './ui/select-item-size/select-item-size.component';
import { ItemPhotosComponent } from './item-photos/item-photos.component';
import { SizeGuideComponent } from './size-guide/size-guide.component';
import { ColorpickerComponent } from './ui/colorpicker/colorpicker.component';
import { SizepickerComponent } from './ui/sizepicker/sizepicker.component';
import { CostpickerComponent } from './ui/costpicker/costpicker.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RangeMapZoomComponent } from './ui/range-map-zoom/range-map-zoom.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserWishlistComponent } from './user-wishlist/user-wishlist.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { HomeComponent } from './home/home.component';
import { ShoppingRoadComponent } from './shopping-road/shopping-road.component';
import { ShopPartnersComponent } from './shop-partners/shop-partners.component';
import { ShopHistoryComponent } from './shop-history/shop-history.component';
import { ShopFeaturesComponent } from './shop-features/shop-features.component';
import { ShopProductFeaturesComponent } from './shop-product-features/shop-product-features.component';
import { ItemLikerComponent } from './item-liker/item-liker.component';
import { AboutComponent } from './about/about.component';
import { AboutSkillsComponent } from './about-skills/about-skills.component';
import { AboutIntroComponent } from './about-intro/about-intro.component';
import { ItemsSortComponent } from './items-sort/items-sort.component';
import { AboutHistoryComponent } from './about-history/about-history.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserComponent } from "app/user/user.component";
import { UserStatisticComponent } from './user-statistic/user-statistic.component';


import { UserCartGuard } from "app/_guards/user-cart.guard";
import { UserWishlistGuard } from "app/_guards/user-wishlist.guard";
import { UserStatisticGuard } from "app/_guards/user-statistic.guard";
import { UserInfoGuard } from "app/_guards/user-info.guard";

import { SelectComponent } from './ui/select/select.component';
import { DropdownComponent } from './ui/dropdown/dropdown.component';
import { UserInfoComponent } from "app/user-info/user-info.component";
import { UserSettingsComponent } from "app/user-settings/user-settings.component";
import { UserCartOrderComponent } from './user-cart-order/user-cart-order.component';
import { UserCartCheckoutComponent } from './user-cart-checkout/user-cart-checkout.component';
import { UserCartDeliveryComponent } from './user-cart-delivery/user-cart-delivery.component';
import { UserCartPaymentComponent } from './user-cart-payment/user-cart-payment.component';
import { CreditCardEditComponent } from './credit-card-edit/credit-card-edit.component';
import { CreditCardPresetListComponent } from './credit-card-preset-list/credit-card-preset-list.component';
import { CreditCardPresetComponent } from './credit-card-preset/credit-card-preset.component';
import { CategoryComponent } from './category/category.component';
import { SizeService } from "app/_services/size.service";
import { OnlineShopErrorHandler } from "app/online-shop-error-handler";
import { PageErrorComponent } from './page-error/page-error.component';

import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { NotifyManagerComponent } from './notify-manager/notify-manager.component';
import { NotifyManager } from "app/_services/notify-manager.service";
import { UserStatisticModule } from 'app/user-statistic/user-statistic.module';


const onlineShopRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'products', component: OnlineShopComponent },
	{ path: 'products/:id', component: ItemComponent },
	{
		path: 'user',
		component: UserDashboardComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'login'
			},
			{
				path: 'login',
				component: UserLoginComponent
			},
			{
				path: 'info',
				component: UserInfoComponent,
				canActivate: [UserInfoGuard]
			},
			{
				path: 'cart',
				component: UserCartComponent,
				canActivate: [UserCartGuard]
			},
			{
				path: 'wishlist',
				component: UserWishlistComponent,
				canActivate: [UserWishlistGuard],
			},
			{
				path: 'statistic',
				component: UserStatisticComponent,
				canActivate: [UserStatisticGuard]
			},
			{
				path: 'settings',
				component: UserSettingsComponent
			}
		]
	},
	{ path: 'product-liker', component: ItemLikerComponent },
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'about', component: AboutComponent },
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/home'
	},
	{ path: 'error', component: PageErrorComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		OnlineShopComponent,
		ItemsSearchComponent,
		ItemComponent,
		PageNotFoundComponent,
		ItemListComponent,
		LoadingComponent,
		SelectItemCountComponent,
		SelectItemColorComponent,
		SelectItemSizeComponent,
		ItemPhotosComponent,
		SizeGuideComponent,
		ColorpickerComponent,
		SizepickerComponent,
		CostpickerComponent,
		CategoryListComponent,
		PaginatorComponent,
		HeaderComponent,
		FooterComponent,
		SliderComponent,
		ContactsComponent,
		RangeMapZoomComponent,
		UserDashboardComponent,
		UserWishlistComponent,
		UserCartComponent,
		HomeComponent,
		ShoppingRoadComponent,
		ShopPartnersComponent,
		ShopHistoryComponent,
		ShopFeaturesComponent,
		ShopProductFeaturesComponent,
		ItemLikerComponent,
		AboutComponent,
		AboutSkillsComponent,
		AboutIntroComponent,
		ItemsSortComponent,
		AboutHistoryComponent,
		AboutTeamComponent,
		UserLoginComponent,
		UserComponent,
		UserSettingsComponent,
		UserInfoComponent,
		SelectComponent,
		DropdownComponent,
		UserCartOrderComponent,
		UserCartCheckoutComponent,
		UserCartDeliveryComponent,
		UserCartPaymentComponent,
		CreditCardEditComponent,
		CreditCardPresetListComponent,
		CreditCardPresetComponent,
		CategoryComponent,
		PageErrorComponent,
		NotifyManagerComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(onlineShopRoutes),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyC-rAlCQwoW7PpUspaBZc2ODHKVP5VW8f4'
		}),
		TextMaskModule,
		UserStatisticModule
	],
	providers: [
		ColorService,
		ItemService,
		CategoryService,
		UserDataService,
		UserCartGuard,
		UserWishlistGuard,
		UserStatisticGuard,
		UserInfoGuard,
		SizeService,
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		{ provide: ErrorHandler, useClass: OnlineShopErrorHandler },
		NotifyManager
	],
	bootstrap: [AppComponent]
})

export class AppModule {

	private _onlineShopErrorHandler: any = null;

	constructor(
		errorHandler: ErrorHandler,
		private _router: Router
	) {
		this._onlineShopErrorHandler = errorHandler as OnlineShopErrorHandler;
		
		this._onlineShopErrorHandler.errorObservable.subscribe(error => {

			if (error instanceof Response || error.rejection instanceof Response) {
				console.error(error);
				return;
			}
			this._router.navigate(['/error']).then(() => {
				console.error(error);
			});
		});
	}
}