import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';

import { SidenavComponent } from './sidenav/sidenav.component';
import { CompaniesComponent } from './companies/companies.component';
import { QuestionsComponent } from './questions/questions.component';
import { CategoriesComponent } from './categories/categories.component';
import { ChanllengesComponent } from './chanllenges/chanllenges.component';
import { RewardsComponent } from './rewards/rewards.component';
import { BillingComponent } from './billing/billing.component';
import { AddminSettingComponent } from './addmin-setting/addmin-setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "companies",
    component: CompaniesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "questions",
    component: QuestionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "categories",
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "chanllenges",
    component: ChanllengesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "rewards",
    component: RewardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "billing",
    component: BillingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "addmin-setting",
    component: AddminSettingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sidenav",
    component: SidenavComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
