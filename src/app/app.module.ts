import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChallengeDashboardModule } from './challengeLayout/challenge.module';

import { AppComponent } from './app.component';
import { TableConteinerComponent } from './challengeLayout/containers/table-conteiner/table-conteiner.component';
import { TablesComponent } from './challengeLayout/components/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    TableConteinerComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    ChallengeDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
