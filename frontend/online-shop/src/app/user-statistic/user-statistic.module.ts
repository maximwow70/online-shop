import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatisticComponent } from 'app/user-statistic/user-statistic.component';
import { UserOrdersComponent } from 'app/user-statistic/user-orders/user-orders.component';
import { UserLikesComponent } from './user-likes/user-likes.component';
import { UserCategoryLikesComponent } from './user-category-likes/user-category-likes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserStatisticComponent,
    UserOrdersComponent,
    UserLikesComponent,
    UserCategoryLikesComponent
  ]
})
export class UserStatisticModule { }
