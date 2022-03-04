import { TuiRootModule, TuiDialogModule, TuiNotificationModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent, PizzaPartyComponent } from './components/home/home.component';

import { DashboardModule } from './components/dashboard/dashboard.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthComponent } from './components/auth/auth.component';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogOpenDetails } from './components/page-details/dialog-open-details';

import { TuiCarouselModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AuthComponent,
    PageDetailsComponent,
    DialogOpenDetails,
    PizzaPartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    TuiRootModule,
    TuiDialogModule,
    TuiCarouselModule,
    MatSnackBarModule,
    TuiNotificationModule,
    MatProgressSpinnerModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
