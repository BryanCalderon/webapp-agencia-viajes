import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../../../services/toast/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  host: { '[class.ngb-toasts]': 'true' }
})
export class ToastComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit(): void {
  }

  remove(toast) {
    this.toastService.remove(toast);
  }

}
