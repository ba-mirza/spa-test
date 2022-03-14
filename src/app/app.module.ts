import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent, SuccesfullyComponent } from './components/home/home.component';

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
import { MatPaginatorModule } from '@angular/material/paginator';

import { AuthComponent } from './components/auth/auth.component';
import { PageDetailsComponent } from './components/page-details/page-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiCarouselModule } from '@taiga-ui/kit';
import { TuiRootModule, TuiDialogModule, TuiNotificationModule, TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  TuiNotification, } from "@taiga-ui/core";

import { AuthInterceptor } from './_helpers/AuthInterceptor';
import { DialogOpenDetails } from './components/page-details/dialog-details/dialog-open-details';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

const NOTIFICATIONS_OPTIONS: Provider = {
  provide: TUI_NOTIFICATION_OPTIONS,
  useValue: {
    ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
    status: TuiNotification.Error,
    hasIcon: true,
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AuthComponent,
    PageDetailsComponent,
    DialogOpenDetails,
    SuccesfullyComponent
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
    MatPaginatorModule,
    TuiRootModule,
    TuiDialogModule,
    TuiCarouselModule,
    MatSnackBarModule,
    TuiNotificationModule,
    MatProgressSpinnerModule
],
  providers: [INTERCEPTOR_PROVIDER, NOTIFICATIONS_OPTIONS],
  bootstrap: [AppComponent]
})
export class AppModule { }
