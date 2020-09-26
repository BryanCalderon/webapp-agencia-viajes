import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

type State = { id: number, name: string };
type Model = { origen: String, destino: string, select: Number };

const states: State[] = [
  { id: 0, name: 'Bogota' },
  { id: 1, name: 'Cali' },
  { id: 2, name: 'Medellin' },
  { id: 3, name: 'Barranquilla' },
  { id: 4, name: 'Cartagenda' },
  { id: 5, name: 'Cucuta' },
  { id: 6, name: 'Villavicencio' },
];

@Component({
  selector: 'app-searcher-plan',
  templateUrl: './searcher-plan.component.html',
  styleUrls: ['./searcher-plan.component.css']
})
export class SearcherPlanComponent implements OnInit {

  public model: Model = { origen: '', destino: '', select: 1 };
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  formatterSearch = (state: State) => state.name;
  select: Number;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 5);
  }

  ngOnInit() {
    this.select = 1;
  }

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => states.filter(state => new RegExp(term, 'mi').test(state.name)).slice(0, 10))
  )

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}
