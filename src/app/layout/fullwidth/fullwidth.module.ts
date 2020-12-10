import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { UploadComponent } from 'src/app/modules/upload/upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FullwidthComponent,
    HomeComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class FullwidthModule { }
