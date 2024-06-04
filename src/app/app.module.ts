import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app.routes";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { AtomicDesignModule } from "./atomic-design/atomic-design.module";
import { RequestInterceptor } from "./config/interceptors/request.interceptor";
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppMainComponent } from "./app-main.component";

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    AtomicDesignModule,
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    MessageService,
    ConfirmationService
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
