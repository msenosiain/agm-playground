import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDspf9uKix5JuiyotuPRvEIfMzkc5eNW8M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
