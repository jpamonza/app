import { Component } from '@angular/core';

@Component({
  selector: 'app-envelop',
  standalone: true,
  imports: [],
  templateUrl: './envelop.component.html',
  styleUrls: ['./envelop.component.css']
})
export class EnvelopComponent {
  isOpen = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
