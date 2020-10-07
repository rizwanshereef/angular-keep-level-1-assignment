import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NotesService } from './notes.service';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ AppComponent, HeaderComponent],
  imports: [BrowserModule, BrowserAnimationsModule,HttpClientModule,MatToolbarModule,MatExpansionModule,
    FormsModule,MatCardModule,MatButtonModule,MatInputModule,MatFormFieldModule ],
  providers: [ NotesService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
