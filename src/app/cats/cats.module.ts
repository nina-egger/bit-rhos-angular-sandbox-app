import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatsRoutingModule} from './cats-routing.module';
import {CatsComponent} from './cats.component';
import {MatTableModule} from '@angular/material/table';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
	declarations: [CatsComponent],
	imports: [CommonModule, CatsRoutingModule, MatTableModule, TranslateModule]
})
export class CatsModule {}
