import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SlimLoadingBarService, SlimLoadingBarComponent } from 'ng2-slim-loading-bar';
import { TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

import { MobileHideDirective } from './shared/directives/mobile-hide.directive';
import { ScheduleEditComponent } from './schedules/schedule-edit.component';
import { ScheduleListComponent } from './schedules/schedule-list.component';
import { UserCardComponent } from './users/user-card.component';
import { UserListComponent } from './users/user-list.component';


import { HomeComponent } from './home/home.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { UsersComponent } from './users/users.component';
import { SchedulesComponent } from './schedules/schedules.component';


import { DataService } from './shared/services/data.service';
import { ConfigService } from './shared/utils/config.service';
import { ItemsService } from './shared/utils/items.service';
import { MappingService } from './shared/utils/mapping.service';
import { NotificationService } from './shared/utils/notification.service';
import { LoginService } from './shared/services/login.service';
import { AccountEventsService } from './shared/services/account.events.service';
import { FormBuilder } from '@angular/forms';


import { AppComponent } from './app.component';
import { JuliaEnxovaisFrontendRoutingModule } from './app-routing.module';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AccountComponent } from './account/account.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateFormatPipe,
    HighlightDirective,
    UsersComponent,
    SchedulesComponent,
    MobileHideDirective,
    ScheduleEditComponent,
    ScheduleListComponent,
    SlimLoadingBarComponent,
    UserCardComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JuliaEnxovaisFrontendRoutingModule,
    DatepickerModule,
    Ng2BootstrapModule,
    ModalModule,
    ProgressbarModule,
    PaginationModule,
    TimepickerModule
  ],
  providers: [
    ConfigService,
    DataService,
    ItemsService,
    MappingService,
    NotificationService,
   SlimLoadingBarService,
   LoginService,
   AccountEventsService,
   FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
