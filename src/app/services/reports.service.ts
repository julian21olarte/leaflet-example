import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private afDatabase: AngularFirestore) { }

  public getReports() {
    return this.afDatabase.collection('reports').valueChanges();
  }
}
