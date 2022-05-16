import { Injectable} from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { FireCollections } from "./utils/fire-collections";
@Injectable({
  providedIn: 'root'
})
export class FireCategoryService{
  public items: Observable<any>
  public itemsRu: Observable<any>
  
  constructor(public afs:AngularFirestore) {
    this.initFireCategory()
  }

  
  public initFireCategory(): void{
      this.items = this.afs.collection(FireCollections.CATEGORIES).valueChanges().pipe()
      this.itemsRu = this.afs.collection(FireCollections.CATEGORIES_RU).valueChanges().pipe()
  }
  
  
  getItems(): Observable<any>{
      return this.items
  }
  
  
}
