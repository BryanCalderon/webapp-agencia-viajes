import { Component, Input, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  hoveredDate: NgbDate | null = null;
  @Input() model;
  @Input() fromDate: string;
  @Input() toDate: string;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
  }

  ngOnInit(): void {
  }

  onDateSelection(date: NgbDate) {

    if (!this.model[this.fromDate] && !this.model[this.toDate]) {
      this.model[this.fromDate] = date;
    } else if (this.model[this.fromDate] && !this.model[this.toDate] && date && date.after(this.model[this.fromDate])) {
      this.model[this.toDate] = date;
    } else {
      this.model[this.toDate] = null;
      this.model[this.fromDate] = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.model[this.fromDate] && !this.model[this.toDate] && this.hoveredDate && date.after(this.model[this.fromDate]) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.model[this.toDate] && date.after(this.model[this.fromDate]) && date.before(this.model[this.toDate]);
  }

  isRange(date: NgbDate) {
    return date.equals(this.model[this.fromDate]) || (this.model[this.toDate] && date.equals(this.model[this.toDate])) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}
