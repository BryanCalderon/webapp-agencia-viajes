import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {
  @Input() list: any[];
  @Input() fieldSearch: string;
  @Input() label: String;
  @Input() model: any;
  @Input() key: string;
  @Output() onChangeEvent = new EventEmitter<string>();
  formatterSearch = (item: any) => item[this.fieldSearch];

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.list.filter(item => new RegExp(term, 'mi')
      .test(item[this.fieldSearch]))
      .slice(0, 10))
  )

  selectedItem(item) {
    this.model[this.key] = item.item;
    this.onChangeEvent.emit(item);
  }
}
