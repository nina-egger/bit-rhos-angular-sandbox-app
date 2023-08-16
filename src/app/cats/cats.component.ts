import {Component, inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Cat} from './cats.model';
import {CatsService} from './cats.service';

@Component({
	selector: 'app-cats',
	templateUrl: './cats.component.html',
	styleUrls: ['./cats.component.scss']
})
export class CatsComponent {
	displayedColumns: string[] = ['name'];

	dataSource: MatTableDataSource<Cat> = new MatTableDataSource<Cat>([]);

	private readonly catService = inject(CatsService);

	constructor() {
		this.fetchBreeds();
	}

	private fetchBreeds(): void {
		this.catService.getBreeds().subscribe((cats: Cat[]) => (this.dataSource.data = cats));
	}
}
