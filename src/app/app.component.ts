import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	switches: Array<boolean> = [true,true,true,true,true,true,true];
	flipswitch(idx){
		this.switches[idx] = !this.switches[idx];
	}
}
