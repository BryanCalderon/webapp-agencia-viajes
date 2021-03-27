import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
    console.log("this.toasts >> ", this.toasts);
    
  }

  remove(toast) {
    console.log("REMOVE >> ", toast);

    this.toasts = this.toasts.filter(t => t !== toast);
  }
}