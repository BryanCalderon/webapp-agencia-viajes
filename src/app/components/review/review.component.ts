import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() picture: any;
  @Input() comentario: any;
  @Input() calificacion: any;

  constructor() { }

  ngOnInit(): void {
  }

}
