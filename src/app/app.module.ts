import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './common/header/header.component';
import { PaginatorComponent } from './common/paginator/paginator.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestCache } from './interceptors/request-cache.service';
import { CachingInterceptor } from './interceptors/caching.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailComponent, HeaderComponent, PaginatorComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  providers: [RequestCache, { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
