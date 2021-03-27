import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from 'src/app/utils/util.service';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  @Input() model;
  @Input() steps;

  constructor(public utilService: UtilService) { }

  ngOnInit(): void {
  }

}
