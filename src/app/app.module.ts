import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { Principal } from './pages/principal';
import { reducer } from './store/reducers';


@NgModule({
  declarations: [
    AppComponent,
    Principal
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
