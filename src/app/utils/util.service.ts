import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilService {

    convertToDate(date: any) {
        if (date instanceof Object) {
            let d = new Date(date.year, date.month - 1, date.day),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
            return [year, month, day].join('-');
        } else {
            return date;
        }
    }
}