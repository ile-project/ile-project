import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AgentsignupPage } from "../pages/agentsignup/agentsignup";
import { StudentsignupPage } from "../pages/studentsignup/studentsignup";
import { HomePage } from '../pages/home/home';
import { AgentsigninPage } from "../pages/agentsignin/agentsignin";
import { StudentsigninPage } from "../pages/studentsignin/studentsignin";
import { TaskPage } from "../pages/task/task";

import { DashboardPage } from "../pages/dashboard/dashboard";
import { ListingPage } from "../pages/listing/listing";
import { AutenticatePage } from "../pages/autenticate/autenticate";
import { ListingsPage } from '../pages/listings/listings';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { EventProvider } from '../providers/event/event';
import { MenuPage } from '../pages/menu/menu';
import { SuperTabsModule } from "ionic2-super-tabs";


@NgModule({
  declarations: [
    MyApp,
    AgentsignupPage,
    StudentsignupPage,
    AgentsigninPage,
    ListingPage,
    DashboardPage,
    StudentsigninPage,
    AutenticatePage,
    ListingsPage,
    HomePage,
    TaskPage,
    MenuPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgentsignupPage,
    StudentsignupPage,
    AgentsigninPage,
    StudentsigninPage,
    ListingPage,
    ListingsPage,
    AutenticatePage,
    DashboardPage,
    HomePage, 
    TaskPage,
    MenuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ProfileProvider,
    EventProvider
  ]
})
export class AppModule {}
