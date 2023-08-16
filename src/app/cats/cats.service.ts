import {HttpClient} from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Cat} from './cats.model';

@Injectable({
	providedIn: 'root'
})
export class CatsService {
	private readonly httpClient = inject(HttpClient);

	getBreeds(): Observable<Cat[]> {
		return this.httpClient.get<Cat[]>('https://api.thecatapi.com/v1/breeds');
	}
}
