import { Component, OnInit } from "@angular/core";
import { NotificationsService } from 'src/app/shared/services/notifications.service'
import { UploadService } from 'src/app/shared/services/upload.service'

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {

  isHovering: boolean;
  user: string = null;
  files: File[] = [];

  constructor(private notificationsService: NotificationsService,
    private uploadService: UploadService,) { }

  ngOnInit() {
  }

  onSelectUser(user) {
    this.user = user
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.files = []
    if (this.user === null) {
      this.notificationsService.showNotification('Selecione um usuário para continuar', 'OK', 'error');
      return
    }
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
    for (let j = 0; j < files.length; j++) {
      if (this.files[j].type !== 'text/xml') {
        this.notificationsService.showNotification(`Arquivo ${this.files[j].name} não é formato xml`, 'OK', 'error');
        this.user = null
        this.files = []
        return
      }
    }
  }

  onDropUpload(files) {
    if (this.files === undefined || this.files.length == 0) {
      this.notificationsService.showNotification('Não há arquivos para carregar', 'OK', 'error');
      return
    }
    for (let i = 0; i < this.files.length; i++) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        let xml = fileReader.result;
        //async _ => {
          if (this.user === 'comprador') {
             this.uploadService.initNotasOrg1(xml).subscribe(result => {
              this.notificationsService.showNotification('Blockchain: Nota registrada para Comprador!', 'OK', 'upload');
            })
          } else {
            if (this.user === 'fornecedor') {
              this.uploadService.initNotasOrg2(xml).subscribe(result => {
                this.notificationsService.showNotification('Blockchain: Nota registrada para Fornecedor!', 'OK', 'upload');
              })
            }
          }
        //}
      }
      fileReader.readAsText(files[i]);
    }

  }
}