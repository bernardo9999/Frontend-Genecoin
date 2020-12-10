import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { SearchService } from 'src/app/shared/services/search.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service'
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import * as _moment from 'moment';

const moment =  _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class SearchComponent implements OnInit {
  range = new FormGroup({
    start_date: new FormControl(''),
    end_date: new FormControl(''),
  });

  constructor(private searchService: SearchService,
    private notificationsService: NotificationsService,) { }

  ngOnInit() { }

  onSubmit() {
    if (this.range.value) {
      this.searchService.compareNotas(new Date(this.range.value.start_date),new Date(this.range.value.end_date)).subscribe(result => {
        if(result === true){
        this.notificationsService.showNotification('Blockchain: Notas conferem!', 'OK', 'success');
      }else{
        if (result === "0" ){
          this.notificationsService.showNotification('Blockchain: Não existem notas para o período selecionado!', 'OK', 'error');
        }
        this.notificationsService.showNotification('Blockchain: Notas nao conferem!', 'OK', 'error');
      }
      })
    }
  }
}