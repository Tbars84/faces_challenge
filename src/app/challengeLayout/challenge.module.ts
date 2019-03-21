import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableConteinerComponent } from './containers/table-conteiner/table-conteiner.component';
import { TablesComponent } from './components/tables/tables.component';

@NgModule({
    declarations : [
        TableConteinerComponent,
        TablesComponent
    ],
    imports : [
    CommonModule
    ],
    exports : [
        TableConteinerComponent
    ],
})

export class ChallengeDashboardModule{}
