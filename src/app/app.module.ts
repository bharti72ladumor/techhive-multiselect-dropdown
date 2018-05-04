import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TechhiveMultiSelectModule } from 'techhive-multiselect-dropdown/angular2-multiselect-dropdown';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TechhiveMultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
