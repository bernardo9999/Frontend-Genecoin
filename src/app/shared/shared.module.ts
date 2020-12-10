import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButton, MatButtonModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInput, MatInputModule, MatMenuModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule, MatToolbarModule, MAT_DATE_LOCALE, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DropzoneDirective } from './events/dropzone.directive';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { NotificationsComponent } from './components/notifications/notifications.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DropzoneDirective,
    FileuploadComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSnackBarModule,
  ],  
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    NotificationsComponent,
    DropzoneDirective,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  entryComponents:[
  NotificationsComponent,
  ]
})
export class SharedModule { }
