import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class NumberAdminService {

  constructor(private firestore:AngularFirestore,private db:AngularFireDatabase) { }



  createNummber(data) {
    return this.firestore.collection('numbers').doc(data.number).set(data);
}

fetchNumbers(){
  return this.firestore.collection('numbers').valueChanges();
}

fetchOrders(){
  return this.firestore.collection('orders').valueChanges();
}



fetchArticles(){
  return this.firestore.collection('articles').snapshotChanges();

}


deleteArticle(x){

  return this.firestore.collection('/articles').doc(x).delete();

}



deleteCategory(x){

  return this.firestore.collection('/categories').doc(x).delete();

}


editCategory(x,y){

  var db = firebase.firestore();

  db.collection("categories").doc(x).update({category_name: y});




}

createCategory(data){
  return this.firestore.collection('/categories').add(data);


  // return this.firestore.collection('categories').add(data);

}

fetchCategories(){
  return this.firestore.collection('categories').valueChanges();

}

fetchCustomCategories(){
  return this.firestore.collection('categories').snapshotChanges();

}


createArticle(data){
  return this.firestore.collection('articles').add(data);
}


}
