import {Component} from '@angular/core';
import {ObINavigationLink} from '@oblique/oblique';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'bit-angular-sandbox';
	mainNavigation: ObINavigationLink[] = [
		{url: 'home', label: 'Home'},
		{url: 'cats', label: 'Cats'}
	];
}
