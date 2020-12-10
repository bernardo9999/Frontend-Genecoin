import { Component, OnInit } from "@angular/core";
import * as xml2js from "xml2js";
import { NotificationsService } from 'src/app/shared/services/notifications.service'
import { UploadService } from 'src/app/shared/services/upload.service'

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
  filexml: any = null;
  isHovering: boolean;
  user: string = null;
  files: File[] = [];
  userDrop: string;
  file: File

  constructor(private notificationsService: NotificationsService,
    private uploadService: UploadService,) { }

  ngOnInit() {
   }

  onSelectUser(user) {
    this.user = user
    this.userDrop = user
    console.log("user on select ", this.user)
    console.log("user on drop ", this.userDrop)

  }

  onFileSelected(e) {
    this.filexml = e.target.files[0];
    if (this.filexml.type !== 'text/xml') {
      this.notificationsService.showNotification('Selecione arquivo de nota fiscal em formato xml', 'OK', 'error');
      e.target.files[0] = null
      return
    }
  }

  onUpload(filexml) {
    if (this.user === null) {
      this.notificationsService.showNotification('Selecione um usuário para continuar', 'OK', 'error');
      return
    }
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      let xml = fileReader.result;
      console.log('file  ', xml)
      console.log(this.user)

      if (this.user === 'comprador') {
        this.uploadService.initNotasOrg1(xml).subscribe(result => {
          this.notificationsService.showNotification('Blockchain: Nota registrada para Comprador!', 'OK', 'upload');
          this.user = null
          this.filexml = null
        })
      } else {
        if (this.user === 'fornecedor') {
          this.uploadService.initNotasOrg2(xml).subscribe(result => {
            this.notificationsService.showNotification('Blockchain: Nota registrada para Fornecedor!', 'OK', 'upload');
            this.user = null
            this.filexml = null
          })
        }
      }
    }
    fileReader.readAsText(this.filexml);
  }

  toggleHover(event: boolean){
    this.isHovering = event;
  }

  async onDrop(files: FileList) {
    if (this.userDrop === null) {
      this.notificationsService.showNotification('Selecione um usuário para continuar', 'OK', 'error');
      return
    }
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
      if (this.files[i].type !== 'text/xml') {
        this.notificationsService.showNotification('Selecione arquivo de nota fiscal em formato xml', 'OK', 'error');
       return
      }else{
       await this.onDropUpload(this.files[i].name)
      }
    }
    this.userDrop = null 
  }
  onDropUpload(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      let xml = fileReader.result;

      if (this.userDrop === 'comprador') {
        this.uploadService.initNotasOrg1(xml).subscribe(result => {
          this.notificationsService.showNotification('Blockchain: Nota registrada para Comprador!', 'OK', 'upload');
        })
      } else {
        if (this.userDrop === 'fornecedor') {
          this.uploadService.initNotasOrg2(xml).subscribe(result => {
            this.notificationsService.showNotification('Blockchain: Nota registrada para Fornecedor!', 'OK', 'upload');
          })
        }
      }
    }
    fileReader.readAsText(file);
  }
}