import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import { FullwidthComponent } from './layout/fullwidth/fullwidth.component';
import { FullwidthModule } from './layout/fullwidth/fullwidth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropzoneDirective } from './shared/events/dropzone.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
