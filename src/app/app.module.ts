import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';

import { TextEditorComponent } from './text-editor/text-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
  {
    path: '',
    component: TextEditorComponent
  }
])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
