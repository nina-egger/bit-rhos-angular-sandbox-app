import {Component} from '@angular/core';
import {ObINavigationLink} from '@oblique/oblique';
import packageJson from '../../package.json';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'bit-angular-sandbox';
	mainNavigation: ObINavigationLink[] = [{url: 'home', label: 'Home'}];
	public version: string = packageJson.version;
}
