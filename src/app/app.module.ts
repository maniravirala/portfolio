import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedService } from './shared/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule, NavbarModule, ContainerComponent } from '@coreui/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParticlesComponent } from './particles/particles.component';
import { ScrollActiveDirective } from './directive/scroll-active.directive';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ParticlesComponent,
    ScrollActiveDirective,
    SvgComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    NavbarModule,
    ContainerComponent,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
