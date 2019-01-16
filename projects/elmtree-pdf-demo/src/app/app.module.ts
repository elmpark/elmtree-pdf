import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElmtreePdfModule } from 'elmtree-pdf';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ElmtreePdfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
