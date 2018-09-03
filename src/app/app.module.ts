import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRouterModule } from './app.route.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './firebase';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MultipleMarkersComponent } from './components/multiple-markers/multiple-markers.component';
import { ReportsService } from './services/reports.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MultipleMarkersComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    LeafletModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    ReportsService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
