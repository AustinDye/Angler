import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angler';

  pingas: number = 0;

  play(): void {
    this.pingas++;
    console.log(this.pingas);
  }
}
