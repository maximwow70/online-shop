import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { UserCartComponent } from "app/user-cart/user-cart.component";
import { UserWishlistComponent } from "app/user-wishlist/user-wishlist.component";

export const userDashboardRoutes: Routes = [
	{ path: 'cart', component: UserCartComponent, outlet: 'user-dashboard' },
	{ path: 'wishlist', component: UserWishlistComponent, outlet: 'user-dashboard' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(userDashboardRoutes),
	],
	exports: [
		RouterModule
	],
	declarations: [
	]
})
export class UserDashboardModule { }
