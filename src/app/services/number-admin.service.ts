import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class NumberAdminService {

  constructor(private firestore:AngularFirestore) { }



  createNummber(data) {
    return this.firestore.collection('numbers').doc(data.number).set(data);
}

fetchNumbers(){
  return this.firestore.collection('numbers').valueChanges();
}

}
