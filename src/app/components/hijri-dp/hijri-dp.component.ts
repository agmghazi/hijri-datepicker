import {Component, Injectable, OnInit} from '@angular/core';
import {NgbCalendar, NgbCalendarIslamicUmalqura, NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {TranslationWidth} from '@angular/common';

const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
  'ذو القعدة', 'ذو الحجة'];

@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {
  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }
  
  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }
  
  getWeekdayLabel(weekday: number, width?: TranslationWidth) {
    return WEEKDAYS[weekday - 1];
  }
  
  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
  
  getWeekdayShortName(weekday: number): string {
    return '';
  }
}

@Component({
  selector: 'app-hijri-dp',
  templateUrl: './hijri-dp.component.html',
  styleUrls: ['./hijri-dp.component.css'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura},
    {provide: NgbDatepickerI18n, useClass: IslamicI18n}
  ]
})
export class HijriDpComponent implements OnInit {
  model: NgbDateStruct;
  
  constructor() { }
  
  ngOnInit(): void {  }
  
  onSelectDate(e) {
    console.log(`${e.year}-${e.month}-${e.day}`);
  }
}
