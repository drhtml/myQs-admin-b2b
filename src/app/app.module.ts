import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import { AppRoutingModule } from './app-routing.module';

import { CompaniesService } from './companies.service';
import { CategoriesService } from './categories.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CompaniesComponent } from './companies/companies.component';
import { QuestionsComponent } from './questions/questions.component';
import { CategoriesComponent } from './categories/categories.component';
import { ChanllengesComponent } from './chanllenges/chanllenges.component';
import { RewardsComponent } from './rewards/rewards.component';
import { BillingComponent } from './billing/billing.component';
import { AddminSettingComponent } from './addmin-setting/addmin-setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ProfileComponent,
    SidenavComponent,
    CompaniesComponent,
    QuestionsComponent,
    CategoriesComponent,
    ChanllengesComponent,
    RewardsComponent,
    BillingComponent,
    AddminSettingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AmplifyService, CompaniesService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
