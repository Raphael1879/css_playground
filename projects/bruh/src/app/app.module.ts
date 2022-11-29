import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BoxesComponent } from './boxes/boxes.component';
import { IconContainerComponent } from './topbar/icon-container/icon-container.component';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    BoxesComponent,
    IconContainerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
