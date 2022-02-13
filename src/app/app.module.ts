import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { MainComponent } from './components/pages/main/main.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MemberComponent } from './components/pages/member/member.component';
import { MemberEditComponent } from './components/pages/member-edit/member-edit.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { StaffEditComponent } from './components/pages/staff-edit/staff-edit.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { BookComponent } from './components/pages/book/book.component';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookEditComponent } from './components/pages/book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helper/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    MemberComponent,
    MemberEditComponent,
    StaffComponent,
    StaffEditComponent,
    BorrowComponent,
    BookComponent,
    BookAddComponent,
    BookEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
