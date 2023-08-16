import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CatsComponent} from './cats.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CatsComponent', () => {
	let component: CatsComponent;
	let fixture: ComponentFixture<CatsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
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
