import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {RouterModule} from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {AppRoutingModule} from './app-routing.module';
import { UpcomingBdayComponent } from './upcoming-bday/upcoming-bday.component';
import { ManageBdayComponent } from './manage-bday/manage-bday.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UpcomingBdayComponent,
    ManageBdayComponent
  ],
  imports: [
    BrowserModule,
    NzDatePickerModule,
    FormsModule,
    NzLayoutModule,
    NzTableModule,
    NzButtonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    NzDividerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
