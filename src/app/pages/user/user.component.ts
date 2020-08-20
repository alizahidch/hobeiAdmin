import { Component, OnInit } from '@angular/core';
import {NumberAdminService} from '../../services/number-admin.service'
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    articles=[]
    category;
description;
ncategory;



categories:any=[
   
]
    constructor(private api:NumberAdminService){
this.api.fetchArticles().subscribe(res=>{
    res.forEach(element => {
        const data = element.payload.doc.data() as {};
        const id = element.payload.doc.id as {};
        this.articles.push({...data,id})
      });
})


this.api.fetchCategories().subscribe(res=>{
    console.log(res);
    this.categories=res;
})
    }




    ngOnInit(){
    }


    createCategory(){
        console.log(this.ncategory);
        let category={
            category_name:this.ncategory,
            creator:"admin"
        }

        this.api.createCategory(category).then(res=>{
            console.log(res)
        })


        // this.categories.push(this.ncategory)
    }



deleteArticle(x){
console.log(x);
this.api.deleteArticle(this.articles[x].id)
this.articles.splice(x,1)
}

    postArticle(){
      let article={
        category:this.category,
        description:this.description
}

this.api.createArticle(article).then(res=>{
    console.log(res)
})


    }
}
