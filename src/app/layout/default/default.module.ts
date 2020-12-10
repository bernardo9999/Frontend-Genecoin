import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { UploadComponent } from 'src/app/modules/upload/upload.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { UploadService } from 'src/app/shared/services/upload.service';
import { DropzoneDirective } from 'src/app/shared/events/dropzone.directive';


@NgModule({
  declarations: [
    DefaultComponent,
    SearchComponent,
    UploadComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
  ],
  providers:[
    NotificationsService,
    SearchService,
    UploadService,
  ]
})
export class DefaultModule { }
