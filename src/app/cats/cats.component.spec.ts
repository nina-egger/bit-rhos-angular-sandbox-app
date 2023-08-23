import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CatsComponent} from './cats.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatTableModule} from '@angular/material/table';
import {TranslateModule} from '@ngx-translate/core';

describe('CatsComponent', () => {
	let component: CatsComponent;
	let fixture: ComponentFixture<CatsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, MatTableModule, TranslateModule.forRoot()],
			declarations: [CatsComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(CatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
