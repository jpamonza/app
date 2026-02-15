import { Component } from '@angular/core';
import { FloresComponent } from '../../components/flores/flores.component';
import { EnvelopComponent } from '../../components/envelop/envelop.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FloresComponent, EnvelopComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
