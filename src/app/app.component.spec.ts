import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {ObIconModule, ObMasterLayoutModule} from '@oblique/oblique';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, TranslateModule.forRoot(), ObMasterLayoutModule, ObIconModule.forRoot()],
			declarations: [AppComponent]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'bit-angular-sandbox'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('bit-angular-sandbox');
	});
});
