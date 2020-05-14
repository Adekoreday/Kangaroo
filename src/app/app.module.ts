import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }        from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HistoryComponent } from './component/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
